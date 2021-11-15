import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const newLocal = '/graph'
export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'xx',
            component: () =>
                import ('@/views/xx'),
        },
        {
            path: '/home',
            component: () =>
                import ('@/views/home'),
        },
        {
            path: '/xx',
            component: () =>
                import ('@/views/xx'),
        },
        {
            path: '/xxx',
            component: () =>
                import ('@/views/xxx'),
        },
        {
            path: '/menu',
            component: () =>
                import ('@/views/menu'),
        },
        {
            path: '/pdf',
            component: () =>
                import ('@/views/pdf'),
        },
        {
            path: '/table',
            component: () =>
                import ('@/views/table'),
        },
        {
            path: '/dialog',
            component: () =>
                import ('@/components/dialog'),
        },
        {
            path: '/checkbox',
            component: () =>
                import ('@/views/checkbox'),
        },
        {
            path: '/cascader',
            component: () =>
                import ('@/views/cascader'),
        },
        {
            path: '/echarts',
            component: () =>
                import ('@/views/echarts'),
        },
        {
            path: '/highcharts',
            component: () =>
                import ('@/views/highcharts'),
        },
        {
            path: '/liquidfill',
            component: () =>
                import ('@/views/liquidfill'),
        },
        {
            path: '/animate',
            component: () =>
                import ('@/views/animate'),
        },
        {
            path: newLocal,
            component: () =>
                import ('@/views/graph'),
        },
        {
            path: '/graph2',
            component: () =>
                import ('@/views/graph2'),
        },
        {
            path: '/graph3',
            component: () =>
                import ('@/views/graph3'),
        },
        {
            path: '/graph4',
            component: () =>
                import ('@/views/graph4'),
        },
        {
            path: '/contextMenu',
            component: () =>
                import ('@/views/contextMenu'),
        },
        {
            path: '/fenping',
            component: () =>
                import ('@/views/fenping'),
        },
        {
            path: '/scroll',
            component: () =>
                import ('@/views/scroll'),
        },
        {
            path: '/input',
            component: () =>
                import ('@/views/input'),
        },
        {
            path: '/tableHang',
            component: () =>
                import ('@/views/tableHang'),
        },
        //animate
    ]
})