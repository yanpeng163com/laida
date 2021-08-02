import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
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
            path: '/graph',
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
            path: '/contextMenu',
            component: () =>
                import ('@/views/contextMenu'),
        },
        //animate
    ]
})