/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-04 12:38:13
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-04 12:40:29
 * @FilePath     : \test\src\api\map\index.ts
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
 */
import http from '@/utils/request'
import * as T from './types'

const mapApi: T.IMapApi = {
    // 获取图表数据列表
    getData(query) {
        return http.get('/map', query)
    }
}
export default mapApi