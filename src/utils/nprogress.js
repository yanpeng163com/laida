/*
 * @Description: 进度条封装
 * @Version: 2.0
 * @Autor: Wsl
 * @Date: 2020-03-28 13:07:56
 * @LastEditors: Wsl
 * @LastEditTime: 2020-07-28 18:59:21
 */
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false });

export default {
    start() {
        NProgress.start();
    },

    done() {
        NProgress.done();
    }
};