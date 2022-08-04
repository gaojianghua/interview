/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-04 11:51:06
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-04 12:19:39
 * @FilePath     : \test\src\router\index.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import LayOut from '@/layout/myLayout.vue'
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: LayOut,
        children: [
            {
                path: '',
                component: () => import('@/views/home/index.vue'),
            },
            {
                path: '/chart',
                component: () => import('@/views/chart/index.vue'),
            },
            {
                path: '/list',
                component: () => import('@/views/list/index.vue'),
            },
        ],
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
