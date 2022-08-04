<!--
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-04 11:52:29
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-04 16:42:57
 * @FilePath     : \test\src\views\list\index.vue
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
-->
<template>
    <div>
        <div class="d-flex j-sb">
            <div class="d-flex a-center">
                <text class=" flex-shrink mr-1">商品名称:</text>
                <el-input style="width: 200px;" v-model="query.name" placeholder="请输入商品名称" clearable
                    @keyup.enter="handleSearch" />
                <el-button type="primary" @click="handleSearch">搜索
                </el-button>
            </div>
            <el-button type="primary" @click="addItem">新增
            </el-button>
        </div>
        <!-- 表格 -->
        <el-table :data="tableData" style="width: 100%">
            <el-table-column property="id" label="序号" type="index" width="180" />
            <el-table-column property="name" label="商品名称" />
            <el-table-column property="price" label="商品价格" />
            <el-table-column fixed="right" label="操作" width="180">
                <template #default="scope">
                    <el-button link type="primary" size="small" @click="handleDelete(scope.$index, scope.row)">删除
                    </el-button>
                    <el-button link type="primary" size="small" @click="handleEdit(scope.$index, scope.row)">修改
                    </el-button>
                    <el-button link type="primary" size="small" @click="openDefault(scope.$index, scope.row)">查看
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 分页 -->
        <el-pagination v-model:currentPage="query.current" :page-sizes="pageSizes" :page-size="query.pageSize"
            layout="total, sizes, prev, pager, next, jumper" :total="total" @size-change="handleSizeChange"
            @current-change="handleCurrentChange"></el-pagination>
        <!-- 对话框 -->
        <el-dialog v-model="updateVisible" :title="isAddOrUpdate === 1 ? '新增商品' : '修改商品'" width="30%">
            <el-form ref="ruleFormRef" :rules="rules" :model="form" label-width="80px">
                <el-form-item label="商品名称" prop="name">
                    <el-input v-model="form.name" placeholder="请输入商品名称" />
                </el-form-item>
                <el-form-item label="商品价格" prop="price">
                    <el-input v-model="form.price" placeholder="请输入商品价格" />
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="updateVisible = false">取消</el-button>
                    <el-button type="primary" @click="handleUpdate(ruleFormRef)">确定</el-button>
                </span>
            </template>
        </el-dialog>
        <!-- 查看 -->
        <el-dialog v-model="lookVisible" title="商品信息" width="30%">
            <div class=" d-flex flex-column j-center">
                <div class=" d-flex a-center">
                    <text class="mr-1">商品名称:</text>
                    <text>{{ form.name }}</text>
                </div>
                <div class=" d-flex a-center mt-1">
                    <text class="mr-1">商品价格:</text>
                    <text>{{ form.price }}</text>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script setup lang='ts'>
import { onMounted, reactive, ref, watch } from 'vue'
import { listApi } from '@/api/index'
import { IList, IUpdate } from '@/types';
import { FormInstance, FormRules, ElMessage } from 'element-plus';

let status = ref<number>(0)
let updateVisible = ref<boolean>(false)
let lookVisible = ref<boolean>(false)
const tableData = ref<any>([])
let query = ref<IList>({
    current: 1,
    pageSize: 10,
    name: ''
})
let total = ref<number>(0)
let pageSizes = ref<number[]>([10, 20, 30, 40])
let isAddOrUpdate = ref<number>(0)
let form = ref<IUpdate>({
    id: 0,
    name: '',
    price: ''
})
const rules = reactive<FormRules>({
    name: [
        { required: true, message: '请输入商品名称', trigger: 'blur' }
    ],
    price: [
        { required: true, message: '请输入商品价格', trigger: 'blur' }
    ],
})
const ruleFormRef = ref<FormInstance>()
// 获取数据
const getData = async () => {
    const { data, code } = await listApi.getData({
        current: query.value.current,
        pageSize: query.value.pageSize,
    })
    console.log(data)
    if (code == 200) {
        tableData.value = data.rows
        total.value = data.total
    }
}
onMounted(() => {
    getData()
})
// size变化触发
let handleSizeChange = (val: number) => {
    query.value.pageSize = val
    getData()
}
// 点击页码变化
let handleCurrentChange = (val: number) => {
    query.value.current = val
    getData()
}

// 删除
const handleDelete = async (i: number, r: any) => {
    const { code } = await listApi.deleteItem({
        i: r.id
    })
    if (code == 200) {
        if (status.value === 0) {
            getData()
        } else {
            handleSearch()
        }
        ElMessage.success('删除成功')
    }
}
// 修改触发对话框
const handleEdit = (i: number, r: any) => {
    isAddOrUpdate.value = 0
    updateVisible.value = true
    form.value.name = r.name
    form.value.price = r.price
    form.value.id = r.id
}
// 查看
const openDefault = (i: number, r: any) => {
    form.value.name = r.name
    form.value.price = r.price
    lookVisible.value = true
}
// 新增
const addItem = () => {
    form.value.id = 0
    form.value.name = ''
    form.value.price = ''
    isAddOrUpdate.value = 1
    updateVisible.value = true
}
// 点击搜索
const handleSearch = async () => {
    if (!query.value.name) return
    const { data, code } = await listApi.searchItem({
        ...query.value,
        name: query.value.name
    })
    if (code == 200) {
        status.value = 1
        console.log(data)
        tableData.value = data.rows
        total.value = data.total
    }
}
// 确定修改与新增
const handleUpdate = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate(async (valid, fields) => {
        if (valid) {
            console.log('校验成功!')
            let res: any
            if (isAddOrUpdate.value === 0) {
                res = await listApi.updateItem({
                    ...form.value
                })
            } else {
                res = await listApi.addItem({
                    ...form.value
                })
            }

            if (res?.code == 200) {
                if (status.value === 0) {
                    getData()
                } else {
                    handleSearch()
                }
            }
            updateVisible.value = false
            ElMessage.success(isAddOrUpdate.value === 0 ? '修改成功' : '新增成功')
        } else {
            console.log('校验失败!', fields)
        }
    })
}
// 监听搜索框变化
watch(() => query.value.name, val => {
    if (!val) {
        getData()
    } else {
        return
    }
})
</script>

<style lang='scss' scoped>
</style>