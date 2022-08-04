/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-04 12:42:49
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-04 16:29:31
 * @FilePath     : \test\src\mock\index.ts
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
 */
import Mock from 'mockjs'
import { radomNum } from '@/utils'

interface MList {
    id: number,
    name: string,
    price: string
}

let list: MList[] = [
    {
        "id": 10000,
        "name": "大衣",
        "price": "100.00"
    },
    {
        "id": 20000,
        "name": "短裤",
        "price": "20.00"
    },
    {
        "id": 30000,
        "name": "上衣",
        "price": "180.00"
    },
    {
        "id": 40000,
        "name": "跑鞋",
        "price": "200.00"
    },
    {
        "id": 50000,
        "name": "大衣",
        "price": "100.00"
    },
    {
        "id": 60000,
        "name": "大衣",
        "price": "100.00"
    },
    {
        "id": 70000,
        "name": "大衣",
        "price": "100.00"
    },
    {
        "id": 80000,
        "name": "大衣",
        "price": "100.00"
    },
    {
        "id": 90000,
        "name": "大衣",
        "price": "100.00"
    },
    {
        "id": 1000000,
        "name": "大衣",
        "price": "100.00"
    },
    {
        "id": 1010000,
        "name": "大衣",
        "price": "100.00"
    },
    {
        "id": 102000,
        "name": "大衣",
        "price": "100.00"
    }
]

Mock.mock('/api/list', 'post', (params: any) => {
    let info = JSON.parse(params.body)
    let [index, size, total] = [info.current, info.pageSize, list.length]
    index = index - 1
    let len = total / size
    let totalPages = len - parseInt(String(len)) > 0 ? parseInt(String(len)) + 1 : len
    let newDataList = list.slice(index * size, (index + 1) * size)
    return {
        'code': '200',
        'message': '获取成功',
        'data': {
            'current': index,
            'pageSize': size,
            'rows': newDataList,
            'total': total,
            'totalPages': totalPages
        }
    }
})
Mock.mock('/api/list/delete', 'post', (params: any) => {
    let info = JSON.parse(params.body)
    console.log(info)
    list.forEach((item, i) => {
        if (item.id === info.i) {
            list.splice(i, 1)
        }
    })
    return {
        'code': '200',
        'message': '删除成功'
    }
})
Mock.mock('/api/list/search', 'post', (params: any) => {
    let info = JSON.parse(params.body)
    let arr: MList[] = []
    list.forEach((item, i) => {
        if (item.name.indexOf(info.name) != -1) {
            arr.push(item)
        }
    })
    let [index, size, total] = [info.current, info.pageSize, arr.length]
    index = index - 1
    let len = total / size
    let totalPages = len - parseInt(String(len)) > 0 ? parseInt(String(len)) + 1 : len
    return {
        'code': '200',
        'message': '删除成功',
        'data': {
            'current': index,
            'pageSize': size,
            'rows': arr,
            'total': total,
            'totalPages': totalPages
        }
    }
})
Mock.mock('/api/list/update', 'post', (params: any) => {
    let info = JSON.parse(params.body)
    console.log(info)
    list.forEach((item, i) =>{
        if (item.id === info.id) {
            item.name = info.name
            item.price = info.price
        }
    })
    return {
        'code': '200',
        'message': '修改成功'
    }
})
Mock.mock('/api/list/add', 'post', (params: any) => {
    let info = JSON.parse(params.body)
    console.log(info)
    info.id = radomNum(1000, 9999)
    list.unshift(info)
    return {
        'code': '200',
        'message': '修改成功'
    }
})