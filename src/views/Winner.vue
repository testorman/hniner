<template>

<div class="winner" @touchmove="prevent" >
  <div class="img-box">
    <transition>
      <img class = "logo" v-show="isLoad" v-bind:src = "item.icon" @load="loaded" />
    </transition>
  </div>
  <div class="row1">
    <div class="header-box">
     <transition>
        <div class="mainHeader" v-show="isLoad" v-html = "item.eng"/>
     </transition>
    </div>
    <div class="textContainer1" v-show="isLoad" >
      <h3 v-html = "item.description"/>
      <b-k-ani class = "winnerName"
      :msg = "item.winner"
      />
      <div class="bottomText">
        ©2018
      </div>
    </div>
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
        title:"제목",
        description:"내용",
        winner:"김겨엉수",
        eng:"",
        icon:""
      }
    }
  },
   methods:{
     getItems(){
       let url = `https://h9winner.firebaseio.com/items/${this.$route.params.key}.json`
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
      padding-top: 100px;
      margin: 0;
      overflow: hidden;
  }
  img.v-enter, img.v-leave {
      padding-top: 200px;
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
.textContainer1{

    position:relative;
    bottom: -webkit-calc(-100% + 1050px);
    bottom:calc(-100% + 1050px);

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
