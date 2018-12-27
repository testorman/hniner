
<template>
  <div @touchmove="prevent" class = "scrollContainer" >
     <load-modal type = "start" @startScroll = "start" v-show="this.modalShow">
    </load-modal> 
    <div class="marginSpace" id = "top">
       <div class="endText">모두 수고하셨습니다.</div>
    </div>
       <!-- <div class = "item" v-for = "(data, index) in HninerData" v-bind:key = "data.index" v-bind:data-aos = "TransitionData[index%2]" data-aos-anchor-placement="center-center"> -->
      <div class = "item" v-for = "(data, index) in HninerData" v-bind:key = "data.index">
      <div class = "nameText"> {{HninerData[index].name + " 님"}}</div>
      <p/>
      <div class = "contentsText"> {{HninerData[index].contents}}</div>
      <div class="marginSpace2">  </div>
   </div>
  <div class="bottonMarginSpace">

  </div>

  </div>
</template>

<script>
import HninerData from '../assets/json/hnineofweek.json';
import LoadModal from '../components/LoaderModal.vue';


export default {
    components: {
      LoadModal
    },
  data(){
    return{
      HninerData,
      TransitionData: ["fade-up"],
      modalShow: true
    } 
  },
  methods:{
    prevent (event) {
         console.log('something happened')
         event.preventDefault()
         event.stopPropagation()
    },
    start(){

         this.modalShow = false
         var VueScrollTo = require('vue-scrollto');
       //  VueScrollTo.scrollTo('#top', 100000);

         VueScrollTo.scrollTo('#top', 1000000);
         console.log("startx")

    },
    btnClick(){
      console.log(HninerData)
    },
    scrollStart(){

    }
  },created(){
    window.scrollTo(200, document.body.scrollHeight || document.documentElement.scrollHeight);

  },
  mounted() {

    window.history.scrollRestoration = 'manual';
  

    var shuffle = require('shuffle-array');
    
    var db = HninerData;
    shuffle(HninerData);
 
    console.log(HninerData);

    document.documentElement.style.overflow = 'hidden'
    window.scrollTo(200, document.body.scrollHeight || document.documentElement.scrollHeight);
  },

}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
.marginSpace{
      padding-top: 200px;
  //  padding-bottom: 350px;

  width: 100%;
  height: 800px;
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
  width: 100%;
  height: 180px;
  padding-top: 50px;
  margin-bottom: 200px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  color: #FFF;
  }
.nameText{
  font-size: 1.5em

}
.marginSpace2{
  width: 300px;
  height: 300px;
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

