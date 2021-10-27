<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> ---> 
  <div id="app"> 
    <!-- <img :src="`${publicPath}my-image.png`"> -->
    <router-view /> 
  </div>
</template>

<script>
//import Home from './views/Home.vue'

export default {
  name: 'App',
  data(){
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
