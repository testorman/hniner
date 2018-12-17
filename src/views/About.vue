
<template>
  <div @touchmove="prevent" class = "scrollContainer" >
    <div class="marginSpace" id = "top">
       <div class="endText">모두 수고하셨습니다.</div>
    </div>
       <!-- <div class = "item" v-for = "(data, index) in HninerData" v-bind:key = "data.index" v-bind:data-aos = "TransitionData[index%2]" data-aos-anchor-placement="center-center"> -->
      <div class = "item" v-for = "(data, index) in HninerData" v-bind:key = "data.index">
      <div class = "nameText"> {{HninerData[index].name + " 님"}}</div>
      <p/>
      <div class = "contentsText"> {{HninerData[index].contents}}</div>
   </div>
  <div class="bottonMarginSpace">

    <div class = "startBtn" @click="start">시작하기</div>

  </div>

  </div>
</template>

<script>
import HninerData from '../assets/json/hnineofweek.json';

export default {
  data(){
    return{
      HninerData,
      TransitionData: ["fade-up"]
    } 
  },
  methods:{
    prevent (event) {
         console.log('something happened')
         event.preventDefault()
         event.stopPropagation()
    },
    start(){
         var VueScrollTo = require('vue-scrollto');
         VueScrollTo.scrollTo('#top', 1000000);
    },
    btnClick(){
      console.log(HninerData)
    },
    scrollStart(){

    }
  },computed:{
     startScroll(){
         var VueScrollTo = require('vue-scrollto');
         VueScrollTo.scrollTo('#top', 1000000);
    },
  },
  beforeMount(){
  },
  mounted() {
     window.scrollTo(200, document.body.scrollHeight || document.documentElement.scrollHeight);
     this.startScroll();
  },
  updated(){

  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
.marginSpace{
  width: 100%;
  height: 900px;
}
.endText{
  margin-top: 350px;
  font-size: 4em;
}
.bottonMarginSpace{
  width: 100%;
  height: 800px;
}
.item {
  width: 300px;
  height: 180px;
  margin: 50px auto;
  padding-top: 50px;
  text-align: center;
  color: #FFF;
  }
.nameText{
  font-size: 1.5em

}
.startBtn{
    padding-top: 14em;
    font-size: 2em;

}
.contentsText{
  font-size: 1.8em;
  word-break: keep-all;

}


</style>

