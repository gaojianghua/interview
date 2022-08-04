/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-04 15:29:21
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-04 15:59:57
 * @FilePath     : \test\src\types\index.ts
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
 */
export interface IList {
    current: number
    pageSize: number,
    name?: string
}
export interface IUpdate {
    id: number,
    name: string,
    price: string
}