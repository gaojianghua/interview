/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-04 16:49:38
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-04 16:50:59
 * @FilePath     : \admin\vite.config.ts
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
        '@': join(__dirname, '/src'),
    },
},
})