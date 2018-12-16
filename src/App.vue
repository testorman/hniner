<template>
  <div id="app">
    <particles-j-s class = "particle1"/>
    <router-view/>
  </div>
</template>

<script>
import particlesJS from './components/particlesJS.vue'
import AOS from 'aos'

export default{
  components:{
    particlesJS
  },
  created(){
    AOS.init({  duration: 3000,
    mirror:true});
  }
}
</script>

<style lang="scss">

@font-face { 
  font-family: 'Swagger'; 
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/Swagger.woff') 
  format('woff');
   font-weight: normal; 
   font-style: normal; 
   }
#app {
  font-family: 'Swagger';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
    background-origin: content-box;
  color: #ffffff;
    overflow-x: hidden;
    margin: -3%;
}
body {
    background-color: #f01d00;

}
.particle1{
  position: absolute;
  top: 0;
  left: 0;
  z-index: -100;
}

#nav {
  padding: 0px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
