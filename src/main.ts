/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-04 12:13:06
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-04 15:27:52
 * @FilePath     : \test\src\main.ts
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
 */
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index'
import { createPinia } from 'pinia'
import App from './App.vue'
import './mock'

const app = createApp(App)

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router)
app.use(ElementPlus)
app.use(createPinia())
app.mount('#app')
