/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-04 12:38:10
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-04 12:40:07
 * @FilePath     : \test\src\api\map\types.ts
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
 */
interface IList {
    page: number
    size: number
}

export interface IMapApi {
    getData: (query: IList) => Promise<any>
}