/*
 * @Description:
 * @Version: 2.0
 * @Autor: Wsl
 * @Date: 2020-07-28 18:06:12
 * @LastEditors: Wsl
 * @LastEditTime: 2020-11-05 15:49:36
 */
import Vue from "vue";
import Axios from "axios";
import store from "@/store";
// import nprogress from "./nprogress";
import { Notification } from "element-ui";
// import md5 from "md5";
// import { shortUuid } from "@/utils/util";
// import { ACCESS_TOKEN } from "../store/mutation-types";

// 根据不同的状态码，生成不同的提示信息
const showStatus = status => {
    // nprogress.done();
    let message = "";
    // 这一坨代码可以使用策略模式进行优化
    switch (status) {
        case 400:
            message = "请求错误(400)";
            break;
        case 401:
            message = "未授权，请重新登录(401)";
            break;
        case 403:
            message = "拒绝访问(403)";
            break;
        case 404:
            message = "请求出错(404)";
            break;
        case 408:
            message = "请求超时(408)";
            break;
        case 500:
            message = "服务器错误(500)";
            break;
        case 501:
            message = "服务未实现(501)";
            break;
        case 502:
            message = "网络错误(502)";
            break;
        case 503:
            message = "服务不可用(503)";
            break;
        case 504:
            message = "网络超时(504)";
            break;
        case 505:
            message = "HTTP版本不受支持(505)";
            break;
        default:
            message = `连接出错(${status})!`;
    }
    return `${message}，请检查网络或联系管理员！`;
};
const axios = Axios.create({
    timeout: 1800000
});
const pending = []; // 声明一个数组用于存储每个ajax请求的队列
const cancelToken = Axios.CancelToken; // 初始化取消请求的构造函数

/**
 * @param {请求体信息} config
 * @param {直接执行的cancel函数，执行即可取消请求} f
 */
const removePending = (config, f) => {
    const flagUrl = config.url + "&" + config.method; // 每次请求存储在请求中队列的元素关键值,例如：一个地址为books/create的post请求处理之后为："books/create&post"
    // 当前请求存在队列中，取消第二次请求
    if (pending.includes(flagUrl)) {
        if (f) {
            // f为实例化的cancelToken函数
            f();
        } else {
            pending.splice(pending.indexOf(flagUrl), 1); // cancelToken不存在，则从队列中删除该请求
        }
    } else {
        // 当前请求不在队列中，就加进队列
        if (f) {
            pending.push(flagUrl);
        }
    }
};
// 添加请求拦截器
axios.interceptors.request.use(
    config => {
        // nprogress.start();
        Notification.closeAll();
        if (config.method === "post") {
            // 由于表单提交都使用post请求，此处只对post做处理；具体情况要结合业务需要
            // eslint-disable-next-line new-cap
            config.cancelToken = new cancelToken(c => {
                removePending(config, c);
            });
        }
        config.method = config.method || "get";

        if (config.method === "get" && config.data) {
            config.params = Object.assign({}, config.params, config.data);
        }
        let token;
        // console.log(store.getters.rememberMe);
        // token = Vue.ls.get(ACCESS_TOKEN);
        // 重新设置时间，避免前台一直操作缓存过期问题
        // Vue.ls.set(ACCESS_TOKEN, token, 30 * 60 * 1000);
        // if (store.getters.rememberMe) {
        //   token = Vue.ls.get(ACCESS_TOKEN);
        //   // 重新设置时间，避免前台一直操作缓存过期问题
        //   Vue.ls.set(ACCESS_TOKEN, token, 30 * 60 * 1000);
        // } else {
        //   token = sessionStorage.getItem(ACCESS_TOKEN);
        // }
        if (token) {
            config.headers["X-Access-Token"] = token; // 让每个请求携带自定义 token 请根据实际情况自行修改 edit by hzp
        }
        const timestamp = Date.now();

        let dataStr = "{}";
        if (config.params) {
            dataStr = JSON.stringify(config.params);
        } else {
            if (config.data) {
                dataStr = JSON.stringify(config.data);
            }
        }
        dataStr = dataStr.replace(/\\"/g, "");
        const sign = "Timestamp" + timestamp + dataStr;

        // console.log(md5('Timestamp1564126422{"password":"123","username":"abc"}').toUpperCase())
        // config.headers["X-Ca-Sign"] = md5(sign).toUpperCase();
        config.headers["X-Ca-Timestamp"] = timestamp;
        return config;
    },
    error => {
        // nprogress.done();
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    response => {
        // nprogress.done();
        if (response.config.method === "post") {
            removePending(response.config);
        }

        if (response.status != 200) {
            // eslint-disable-next-line new-cap
            Notification({
                type: "error",
                title: "系统提示",
                message: showStatus(response.status),
                position: "bottom-left"
            });
        }

        if (response.status == 500 && response.headers.tokeninvalid) {
            setTimeout(() => {
                store.dispatch("Logout").then(() => {
                    // Vue.ls.remove(ACCESS_TOKEN);
                    // this.$router.replace({
                    //   path: "login",
                    //   query: { redirect: this.$router.currentRoute.fullPath }
                    // });
                    window.location.reload();
                    // eslint-disable-next-line new-cap
                    Notification({
                        type: "success",
                        title: "系统提示",
                        message: "登陆失效！已退出",
                        position: "bottom-right"
                    });
                });
            }, 1000);
        }
        //  console.log(response.headers[`content-disposition`]);
        // 判断是否是下载链接
        if (response.headers[`content-disposition`]) {
            console.log(response);
            console.log(response.data);
            return response;
        }
        // console.log(response);
        return response.data;
    },
    error => {
        console.log(error);
        // nprogress.done();
        if (error.response.status) {
            // eslint-disable-next-line new-cap
            Notification({
                type: "error",
                title: "系统提示",
                message: showStatus(error.response.status),
                position: "bottom-right"
            });
        }
        if (error.response.config.method === "post") {
            removePending(error.response.config);
        }

        return Promise.reject(showStatus(error.response.status));
    }
);

export default axios;