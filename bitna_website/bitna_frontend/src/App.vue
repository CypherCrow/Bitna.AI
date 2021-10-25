<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> ---> 
  <div id="app"> 
    <div id="nav">
      <router-link to="/bitna">Home</router-link> 
    </div>
    <router-view /> 
  </div>
</template>

<script>
//import Home from './views/Home.vue'

export default {
  name: 'App',
  components: {
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
