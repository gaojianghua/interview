<!--
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-04 11:38:43
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-04 13:49:31
 * @FilePath     : \test\src\layout\components\myHeader.vue
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
-->
<template>
    <div class="page d-flex a-center">
        <el-icon size="25px" @click="toggle">
        </el-icon>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ collapse: boolean }>()
const emits = defineEmits(['update:collapse'])
const toggle = () => {
    emits('update:collapse', !props.collapse)
}
</script>

<style lang="scss" scoped>
.page {
    padding: 0 20px;
    height: 60px;
}
</style>
