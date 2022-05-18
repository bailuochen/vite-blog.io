/*
 * @Author: baiwx baiwx@citycloud.com.cn
 * @Date: 2022-05-17 13:44:19
 * @LastEditors: baiwx baiwx@citycloud.com.cn
 * @LastEditTime: 2022-05-18 10:18:20
 * @FilePath: /vite/Luochen/vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    vue()
  ],
  server: {
    host: '0.0.0.0'
  }
})
