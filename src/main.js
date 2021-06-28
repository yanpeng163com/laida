// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './store'
import Echarts from "vue-echarts";
import * as echarts from 'echarts'


import Highcharts from 'highcharts'
import HighchartsVue from 'highcharts-vue'
import exportingInit from 'highcharts/modules/exporting'
import sankey from 'highcharts/modules/sankey'
import oldie from 'highcharts/modules/oldie'
import organization from 'highcharts/modules/organization'


exportingInit(Highcharts)
sankey(Highcharts)
oldie(Highcharts)
organization(organization)

Vue.use(HighchartsVue)



Vue.config.productionTip = false
Vue.prototype.$echarts = echarts;
Vue.component("v-echart", Echarts);


Vue.use(ElementUI);
/* eslint-disable no-new */

Vue.directive('dialogDrag', {
    bind(el, binding, vnode, oldVnode) {
        //弹框可拉伸最小宽高
        let minWidth = 400;
        let minHeight = 300;
        //初始非全屏
        let isFullScreen = false;
        let isreduce = false;
        //当前宽高
        let nowWidth = 0;
        let nowHight = 0;
        //当前顶部高度
        let nowMarginTop = 0;
        //获取弹框头部（这部分可双击全屏）
        const dialogHeaderEl = el.querySelector('.el-dialog__header');

        //点击放大图标
        const dialogHeaderBigIcon = el.querySelector('.el-icon-full-screen')
            //点击缩小图标
        const dialogHeaderSmallIcon = el.querySelector('.el-icon-minus')

        const dialogBody = el.querySelector('.el-dialog__body')

        //弹窗
        const dragDom = el.querySelector('.el-dialog');

        //给弹窗加上overflow auto；不然缩小时框内的标签可能超出dialog；
        dragDom.style.overflow = "auto";
        //清除选择头部文字效果
        dialogHeaderEl.onselectstart = new Function("return false");
        //头部加上可拖动cursor
        dialogHeaderEl.style.cursor = 'move';
        dialogHeaderBigIcon.style.cursor = 'pointer';
        dialogHeaderSmallIcon.style.cursor = 'pointer';

        // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
        const sty = dragDom.currentStyle || window.getComputedStyle(dragDom, null);

        dialogHeaderBigIcon.onclick = function() {

            if (isFullScreen == false) {
                nowHight = dragDom.clientHeight;
                nowWidth = dragDom.clientWidth;
                nowMarginTop = dragDom.style.marginTop;
                dragDom.style.left = 0;
                dragDom.style.top = 0;
                dragDom.style.height = "100VH";
                dragDom.style.width = "100VW";
                dragDom.style.marginTop = 0;
                isFullScreen = true;
                dialogHeaderSmallIcon.style.display = 'none'
                dialogHeaderEl.onmousedown = null;
            } else {
                dragDom.style.height = "auto";
                dragDom.style.width = nowWidth + 'px';
                dragDom.style.marginTop = nowMarginTop;
                dialogHeaderSmallIcon.style.display = 'inline-block'
                isFullScreen = false;
                dialogHeaderEl.style.cursor = 'move';
                dialogHeaderEl.onmousedown = moveDown;
            }
        }

        dialogHeaderSmallIcon.onclick = function() {

            if (isreduce == false) {
                nowHight = dragDom.clientHeight;
                nowWidth = dragDom.clientWidth;
                nowMarginTop = dragDom.style.marginTop;
                dragDom.style.position = 'fixed';
                dragDom.style.left = 0;
                dragDom.style.bottom = 0;
                dragDom.style.top = 'unset';
                dragDom.style.height = "51px";
                dragDom.style.width = "250px";
                dialogHeaderBigIcon.style.display = 'none';
                dragDom.style.marginBottom = 0;
                dragDom.style.marginTop = 0;
                isreduce = true
            } else {
                dragDom.style.position = '';
                dragDom.style.height = "auto";
                dragDom.style.width = nowWidth + 'px';
                dialogHeaderBigIcon.style.display = 'inline-block';
                dragDom.style.marginTop = nowMarginTop;

                isreduce = false
            }
        }
        let moveDown = (e) => {
            // 鼠标按下，计算当前元素距离可视区的距离
            const disX = e.clientX - dialogHeaderEl.offsetLeft;
            const disY = e.clientY - dialogHeaderEl.offsetTop;

            // 获取到的值带px 正则匹配替换
            let styL, styT;

            // 注意在ie中 第一次获取到的值为组件自带50% 移动之后赋值为px
            if (sty.left.includes('%')) {
                styL = +document.body.clientWidth * (+sty.left.replace(/\%/g, '') / 100);
                styT = +document.body.clientHeight * (+sty.top.replace(/\%/g, '') / 100);
            } else {
                styL = +sty.left.replace(/\px/g, '');
                styT = +sty.top.replace(/\px/g, '');
            };

            document.onmousemove = function(e) {
                // 通过事件委托，计算移动的距离 
                const l = e.clientX - disX;
                const t = e.clientY - disY;

                // 移动当前元素  
                dragDom.style.left = `${l + styL}px`;
                dragDom.style.top = `${t + styT}px`;

                //将此时的位置传出去
                //binding.value({x:e.pageX,y:e.pageY})
            };

            document.onmouseup = function(e) {
                document.onmousemove = null;
                document.onmouseup = null;
            };
        }
        dialogHeaderEl.onmousedown = moveDown;
        //双击头部效果
        // dialogHeaderEl.ondblclick = (e) => {
        //     if (isFullScreen == false) {
        //         nowHight = dragDom.clientHeight;
        //         nowWidth = dragDom.clientWidth;
        //         nowMarginTop = dragDom.style.marginTop;
        //         dragDom.style.left = 0;
        //         dragDom.style.top = 0;
        //         dragDom.style.height = "100VH";
        //         dragDom.style.width = "100VW";
        //         dragDom.style.marginTop = 0;
        //         isFullScreen = true;
        //         dialogHeaderEl.style.cursor = 'initial';
        //         dialogHeaderEl.onmousedown = null;
        //     } else {
        //         dragDom.style.height = "auto";
        //         dragDom.style.width = nowWidth + 'px';
        //         dragDom.style.marginTop = nowMarginTop;
        //         isFullScreen = false;
        //         dialogHeaderEl.style.cursor = 'move';
        //         dialogHeaderEl.onmousedown = moveDown;
        //     }
        // }


        //拉伸
        let resizeEl = document.createElement("div");
        dragDom.appendChild(resizeEl);
        //在弹窗右下角加上一个10-10px的控制块
        resizeEl.style.cursor = 'se-resize';
        resizeEl.style.position = 'absolute';
        resizeEl.style.height = '10px';
        resizeEl.style.width = '10px';
        resizeEl.style.right = '0px';
        resizeEl.style.bottom = '0px';
        //鼠标拉伸弹窗
        resizeEl.onmousedown = (e) => {
            // 记录初始x位置
            const clientX = e.clientX;
            // 鼠标按下，计算当前元素距离可视区的距离
            const disX = e.clientX - resizeEl.offsetLeft;
            const disY = e.clientY - resizeEl.offsetTop;

            document.onmousemove = function(e) {
                e.preventDefault(); // 移动时禁用默认事件

                // 通过事件委托，计算移动的距离 
                const x = e.clientX - disX + (e.clientX - clientX); //这里 由于elementUI的dialog控制居中的，所以水平拉伸效果是双倍
                const y = e.clientY - disY;
                //比较是否小于最小宽高
                dragDom.style.width = x > minWidth ? `${x}px` : minWidth + 'px';
                dragDom.style.height = y > minHeight ? `${y}px` : minHeight + 'px';
            };
            //拉伸结束
            document.onmouseup = function(e) {
                document.onmousemove = null;
                document.onmouseup = null;
            };
        }
    }
})


new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
})