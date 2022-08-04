/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-04 16:26:00
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-04 16:28:15
 * @FilePath     : \test\src\utils\index.ts
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
 */
export const radomNum = (min:number, max:number) => {
    return Math.floor(Math.random()*(max-min))+min;
}