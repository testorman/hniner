<template>

<div class="winner" @touchmove="prevent" >
  <div class="img-box">
      <img class = "logo item" v-show="isLoad" v-bind:src = "item.icon" @load="loaded" data-aos = "zoom-in-up" />
  </div>
  <div class="mainHeader" v-show="isLoad" v-html = "item.eng"/>
  <div class="space0"/>
  <div class = "textContents" v-html = "item.description" data-aos = "zoom-in-up"/>
  <b-k-ani class = "winnerName"
      :msg = "item.winner" data-aos = "fade-up"
       data-aos-delay="100"
           data-aos-duration="7000"
       data-aos-easing="ease-in-out"

      />
  <div class="bottomText">
        ©2018
   </div>
</div>
</template>

<script>
// @ is an alias to /src
import { VueFlux, FluxParallax } from 'vue-flux';
import Modal from '../components/Modal.vue';
import axios from 'axios';
import particlesJS from '../components/particlesJS.vue'
import BKAni from '../components/BracketAnimation.vue'


export default {
  name: 'winner',
  components: {
          particlesJS,
          VueFlux,
          FluxParallax,
          Modal,
          BKAni
  },
  data () {
    return {
      time: 0,
      winnername:"",
      duration: 5000,
      showModal: false,
      isLoad:false,
      textLoad:false,
      item:{
        title:"",
        description:"",
        winner:"",
        eng:"",
        icon:""
      }
    }
  },
   methods:{
     getItems(){

       console.log(this.$route.params.key);

       let url = ''
       if (this.$route.params.key == undefined) {
           url = `https://h9winner.firebaseio.com/items/greeting.json`


       }else{
           url = `https://h9winner.firebaseio.com/items/${this.$route.params.key}.json`
       }
       
      console.log(url);
       
       axios.get(url).then((res) => {
         this.item = res.data;

         console.log(this.item);
       })
     },  loaded() {
        this.isLoad = true
      },
     loadImg() {
       this.isLoad = false
     },
      prevent (event) {
        if (this.isLoad  == false) {
         console.log('something happened')
         event.preventDefault()
         event.stopPropagation()
        }
    }
   },
   mounted(){
     this.showModal = !this.showModal;

    //this.showDynamicComponentModal()
   },
   created(){
     this.getItems();
   }
}
</script>

<style lang="scss">
.img-box{
  img {
      transition: all 0.7s ease;
      margin: 0;
      overflow: hidden;
  }
  img.v-enter, img.v-leave {
      opacity: 0;
  }
}
.header-box{
  div{
      transition: all 0.7s ease;
      transition-delay: 0.3s;

  }
  div.v-enter, img.v-leave{
      padding-top: 50px;
      opacity: 0;
  }
}
h3{
  font-family: 'Swagger';
  font-size: 22px;
}
.modal{
  width: 100%;
  height: 100%;
}
.space0{
  width: 100%;
  height: 600px;
}
.row1 {
  padding-top: 40px;
  height: 260vh;
}
.winner{
        overflow-x: hidden;

}
.logo{
  padding-top: 100px;
  width:50%;
  height:50%;
}
.mainHeader{
    font-size: 40px;
    line-height: 50px;
    letter-spacing :0.5px;
}
.textContents{

     padding-top: 40px;

    position:relative;
    bottom: -webkit-calc(-100% + 1050px);
    bottom:calc(-100% + 1050px);
    word-break: keep-all;

    padding-left: 50px;
    padding-right: 50px;
    text-align: left;

}
.winnerName{
    padding-top: 100px; 
}


//  .particle1{
//     position: absolute;
//     width: 99%;
//     height:304vh;
//     background-repeat: no-repeat;
//     opacity: 1;
// }





</style>
