<!--
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-04 11:52:35
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-04 18:18:39
 * @FilePath     : \admin\src\views\chart\index.vue
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
-->
<template>
    <div class='d-flex'>
        <!-- 组件 -->
        <div style="width: 20%; height: calc(100vh - 102px);border: 1px solid #00ff;">
            <div class=" d-flex a-center j-center mb-2"
                style="width: 100%; height: 49px; background-color: blue; color: aliceblue;">
                组件
            </div>
            <div class="d-flex flex-column a-center">
                <div class="d-flex a-center j-center flex-column mb-2 cur"
                    :class="chartTypeIndex === i ? 'active' : 'default'" v-for="(item, i) in types" :key="item.id"
                    @click="chooseMap(item, i)">
                    <text>{{ item.type }}</text>
                    <text class="mt-1">{{ item.name }}</text>
                </div>
            </div>
        </div>
        <!-- 画布 -->
        <div style="width: 60%; height: calc(100vh - 101px); border-bottom: 1px solid #00ff;;">
            <div class=" d-flex a-center j-center mb-2"
                style="width: 100%; height: 50px; background-color: blue; color: aliceblue;">
                画布
            </div>
            <div class="d-flex j-center a-center" style="width: 100%; height: calc(100% - 50px)">
                <div ref="main" style="width: 100%; height: 400px">
                </div>
            </div>
        </div>
        <!-- 属性配置 -->
        <div style="width: 20%; height: calc(100vh - 102px);border: 1px solid #00ff;">
            <div class=" d-flex a-center j-center mb-2"
                style="width: 100%; height: 49px; background-color: blue; color: aliceblue;">
                属性配置
            </div>
            <div class="d-flex a-center j-center flex-column mb-2 ">
                <div class="d-flex a-center j-center flex-column">
                    <text>线图颜色</text>
                    <el-select v-model="value" placeholder="Select" @change="selectChange">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { onMounted, ref } from 'vue'
import * as echarts from "echarts";
onMounted(
    () => {
        init()
    }
)
const value = ref<string>('')
const chartTypeIndex = ref<number>(0)
const options = ref([
    {
        value: '#66ff00',
        label: '绿色',
    },
    {
        value: '#8800ee',
        label: '紫色',
    },
    {
        value: '#bb0000',
        label: '红色',
    }
])
const types = ref([
    {
        id: 0,
        type: 'line',
        name: '折线图'
    },
    {
        id: 1,
        type: 'bar',
        name: '柱状图'
    }
])
const main = ref()
let myChart: any
let option = ref<any>({})
const init = () => {
    // 基于准备好的dom，初始化echarts实例
    myChart = echarts.init(main.value);
    // 指定图表的配置项和数据
    option.value = {
        // title: {
        //     text: 'ECharts 入门示例'
        // },
        tooltip: {},
        legend: {
            data: ['销量']
        },
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
            {
                name: '销量',
                type: 'line',
                data: [5, 20, 36, 10, 10, 20],
                itemStyle: {
                    color: '#00ff'
                }
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option.value);
}
// 组件选择
const chooseMap = (e: any, i: number) => {
    chartTypeIndex.value = i
    option.value.series[0].type = e.type
    myChart.setOption(option.value);
}
// 选择颜色
const selectChange = (e: any) => {
    option.value.series[0].itemStyle.color = e
    myChart.setOption(option.value);
}
</script>

<style lang='scss' scoped>
.default {
    width: 150px;
    height: 150px;
    background-color: #fff;
    border: 1px solid #f5f5f5;
}

.active {
    width: 150px;
    height: 150px;
    background-color: #ffd04b;
    border: 1px solid #ffd099;
}
</style>