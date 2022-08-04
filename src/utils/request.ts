/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-04 12:32:19
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-04 12:49:43
 * @FilePath     : \test\src\utils\request.ts
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
 */
//http.ts
import axios, { AxiosRequestConfig } from 'axios'
import NProgress from 'nprogress'

// 设置请求头和请求路径
const server = axios.create({
    baseURL: import.meta.env.VITE_BASE_API,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
})
// 请求拦截
server.interceptors.request.use(
    (config): AxiosRequestConfig<any> => {
        const token = window.sessionStorage.getItem('token')
        if (token) {
            //@ts-ignore
            config.headers.token = token
        }
        return config
    },
    (error) => {
        return error
    }
)
// 响应拦截
server.interceptors.response.use((res) => {
    if (res.data.code === 111) {
        sessionStorage.setItem('token', '')
        // token过期操作
    }
    return res
})
// 请求封装
interface ResType<T> {
    code: number
    data?: T
    msg: string
    err?: string
}
interface Http {
    get<T>(url: string, params?: unknown): Promise<ResType<T>>
    post<T>(url: string, params?: unknown): Promise<ResType<T>>
    upload<T>(url: string, params: unknown): Promise<ResType<T>>
    download(url: string): void
}
const http: Http = {
    get(url, params) {
        return new Promise((resolve, reject) => {
            NProgress.start()
            server
                .get(url, { params })   
                .then((res) => {
                    NProgress.done()
                    resolve(res.data)
                })
                .catch((err) => {
                    NProgress.done()
                    reject(err.data)
                })
        })
    },
    post(url, params) {
        return new Promise((resolve, reject) => {
            NProgress.start()
            server
                .post(url, JSON.stringify(params))
                .then((res) => {
                    NProgress.done()
                    resolve(res.data)
                })
                .catch((err) => {
                    NProgress.done()
                    reject(err.data)
                })
        })
    },
    upload(url, file) {
        return new Promise((resolve, reject) => {
            NProgress.start()
            server
                .post(url, file, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                })
                .then((res) => {
                    NProgress.done()
                    resolve(res.data)
                })
                .catch((err) => {
                    NProgress.done()
                    reject(err.data)
                })
        })
    },
    download(url) {
        const iframe = document.createElement('iframe')
        iframe.style.display = 'none'
        iframe.src = url
        iframe.onload = function () {
            document.body.removeChild(iframe)
        }
        document.body.appendChild(iframe)
    },
}
export default http
