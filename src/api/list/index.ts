/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-04 12:38:01
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-04 16:35:43
 * @FilePath     : \test\src\api\list\index.ts
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
 */
import http from '@/utils/request'
import * as T from './types'

const mapApi: T.IListApi = {
    // 获取图表数据列表
    getData(query) {
        return http.post('/list', query)
    },
    // 删除某一项
    deleteItem(query) {
        return http.post('/list/delete', query)
    },
    // 搜索
    searchItem(query) {
        return http.post('/list/search', query)
    },
    // 修改某一项
    updateItem(query) {
        return http.post('/list/update', query)
    },
    // 新增
    addItem(query) {
        return http.post('/list/add', query)
    }
}
export default mapApi