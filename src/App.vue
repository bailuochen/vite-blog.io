<!--
 * @Author: baiwx baiwx@citycloud.com.cn
 * @Date: 2022-05-17 13:44:19
 * @LastEditors: baiwx baiwx@citycloud.com.cn
 * @LastEditTime: 2022-05-17 15:08:13
 * @FilePath: /vite/Luochen/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <img alt="Vue logo" src="./assets/background.png" />
  <HelloWorld msg="Hello Luo Chen" />
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
html,body{
  height: 100%;
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  background-color: rgba(69, 171, 115, 0.3);
}
</style>
