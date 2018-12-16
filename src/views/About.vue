
<template>
  <div @touchmove="prevent" >
    <!-- <button v-scroll-to="{ 
          el: '#element',
          duration: 2000000
      }">
      Scroll to #element
  </button> -->
    <div class="marginSpace"></div>
    <div class = "item" v-for = "(data, index) in HninerData" v-bind:key = "data.index" v-bind:data-aos = "TransitionData[index%6]" data-aos-anchor-placement="top-center">
      <div class = "nameText"> {{HninerData[index].name + "님"}}</div>
      <p/>
      <div class = "contentsText"> {{HninerData[index].contents}}</div>
   </div>

   <button id = "element">
     end
   </button>
  </div>
</template>

<script>
import HninerData from '../assets/json/hnineofweek.json';

export default {
  data(){
    return{
      HninerData,
      TransitionData: ["fade-up","fade-down","fade-right","fade-left","zoom-in","zoom-out"]
    } 
  },
  methods:{
    prevent (event) {
         console.log('something happened')
         event.preventDefault()
         event.stopPropagation()
    },
    btnClick(){
      console.log(HninerData)
    },
    scrollStart(){

    }
  },
  mounted() {
    const VueScrollTo = require('vue-scrollto');
    VueScrollTo.scrollTo('#element', 2000000)
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
.marginSpace{
  width: 100%;
  height: 500px;
}
.item {
  width: 300px;
  height: 200px;
  margin: 50px auto;
  padding-top: 175px;
  text-align: left;
  color: #FFF;
}
.nameText{
  font-size: 1em

}
.contentsText{
  font-size: 2em
}

</style>

