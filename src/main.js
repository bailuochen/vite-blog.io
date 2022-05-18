/*
 * @Author: baiwx baiwx@citycloud.com.cn
 * @Date: 2022-05-17 13:44:19
 * @LastEditors: baiwx baiwx@citycloud.com.cn
 * @LastEditTime: 2022-05-18 10:27:41
 * @FilePath: /vite/Luochen/src/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
