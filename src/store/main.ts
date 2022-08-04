/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-04 11:54:21
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-04 11:54:36
 * @FilePath     : \test\src\store\main.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
import { defineStore } from 'pinia'

export const useMainStore = defineStore('common',  {
    state: () => ({
        name: '高江华',
    }),
    getters: {
        nameLength: (state) => state.name.length,
    },
    actions: {
        async insertPost(data: string) {
            // 可以做异步
            // await doAjaxRequest(data);
            this.name = data
        },
    },
})
