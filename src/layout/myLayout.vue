<template>
    <el-container>
        <el-aside width="auto">
            <my-menu :collapse="isCollapse" />
        </el-aside>
        <el-container>
            <el-header>
                <my-header v-model:collapse="isCollapse" />
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
import MyMenu from './components/myMenu.vue'
import MyHeader from './components/myHeader.vue'
import { ref } from 'vue'

const isCollapse = ref(false)
</script>

<style lang="scss" scoped>
.el-container {
    height: 100vh;
}
.el-header {
    padding: 0;
    border-bottom: 1px solid #eee;
}
.el-aside {
    background-color: #545c64;
}
</style>
