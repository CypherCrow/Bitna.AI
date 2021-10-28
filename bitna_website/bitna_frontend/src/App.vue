<template> 
  <div id="app"> 
    <transition name="fade">
      <router-view /> 
    </transition>
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

header {
    margin: 40px 0px;
    font-size: 30px;  
}

.fade-enter-active, .fade-leave-active {
  transition-duration: 0.3s; 
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter, .fade-leave-active {
  opacity: 0; 
}
</style>
