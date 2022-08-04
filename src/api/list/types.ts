/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-04 12:38:10
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-04 15:59:49
 * @FilePath     : \test\src\api\list\types.ts
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
 */
import { IList, IUpdate } from '@/types'
interface IDel {
    i: number
}

export interface IListApi {
    getData: (query: IList) => Promise<any>
    deleteItem: (query: IDel) => Promise<any>
    searchItem: (query: IList) => Promise<any>
    updateItem: (query: IUpdate) => Promise<any>
    addItem: (query: IUpdate) => Promise<any>
}