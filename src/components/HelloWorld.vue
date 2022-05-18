<!--
 * @Author: baiwx baiwx@citycloud.com.cn
 * @Date: 2022-05-17 13:44:19
 * @LastEditors: baiwx baiwx@citycloud.com.cn
 * @LastEditTime: 2022-05-18 10:29:27
 * @FilePath: /vite/Luochen/src/components/HelloWorld.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { ref } from 'vue'
defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <el-button type="primary" :icon="Search" @click="count++">Search</el-button>
  <button type="button" >count is: {{ count }}</button>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
