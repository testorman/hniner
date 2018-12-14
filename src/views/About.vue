
<template>
  <div @touchmove="prevent" ><h1>about</h1>
    <button v-scroll-to="{ 
          el: '#element',
          duration: 20000
      }" v-on:click = "btnClick">
      Scroll to #element
  </button>
  <div class = "item" v-for = "(data, index) in HninerData" v-bind:key = "data.index" data-aos = "fade-right">
    {{TransitionData[0]}}
  </div>


  
<!-- <div class="item" data-aos="fade-up"  data-aos-anchor-placement="center-center"> >1</div>
<div class="item" data-aos="fade-down"  data-aos-anchor-placement="center-center"> >2</div>
<div class="item" data-aos="fade-right"  data-aos-anchor-placement="center-center"> >3</div>
<div class="item" data-aos="fade-left"  data-aos-anchor-placement="center-center"> >4</div>

<div class="item" data-aos="zoom-in"  data-aos-anchor-placement="center-center"> >5</div>
<div class="item" data-aos="zoom-out"  data-aos-anchor-placement="center-center"> >6</div>

<div class="item" data-aos="slide-up">7</div>

<div class="item" data-aos="flip-up">8</div>
<div class="item" data-aos="flip-down">9</div>
<div class="item" data-aos="flip-right">10</div>
<div class="item" data-aos="flip-left" id="element">11</div> -->
  
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
    }
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
.item {
  width: 200px;
  height: 200px;
  margin: 50px auto;
  padding-top: 75px;
  background: #ccc;
  text-align: center;
  color: #FFF;
  font-size: 3em;
}

</style>

