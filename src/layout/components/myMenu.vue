<!--
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-04 12:15:23
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-04 12:23:55
 * @FilePath     : \test\src\layout\components\myMenu.vue
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
-->
<template>
    <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        router
        :collapse="collapse"
        @open="handleOpen"
        @close="handleClose"
    >
        <el-menu-item index="/">
            <el-icon><HomeFilled /></el-icon>
            <span class="ml-1">首页</span>
        </el-menu-item>
        <el-menu-item index="/chart">
            <el-icon><Histogram /></el-icon>
            <span class="ml-1">图表</span>
        </el-menu-item>
        <el-menu-item index="/list">
            <el-icon><List /></el-icon>
            <span class="ml-1">列表</span>
        </el-menu-item>
    </el-menu>
</template>

<script setup lang="ts">
const props = defineProps<{ collapse: boolean }>()
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
}
.el-menu-vertical-demo {
    border-right: none;
}
svg {
    width: 1rem;
    height: 1rem;
}
</style>
