<template>

  <div class="Y2018">
  <particles-j-s class = "particle"/>



    <img class = "logo" src = "../assets/logo_18@3x.png" />
    <div class="row">
      <div class="mainHeader">
        Yearend Party<br>
        of HNINE
      </div>
      <div class="textContainer">
      <h3>
          다사다난 했던 2018년도 끝을 향해 달려가고 있습니다.<br>
          올 한해 당신께 좋은 일들이 많은 한 해였기를 희망해 봅니다. 
          끝은 또 다른 시작입니다.<br><br>

어느 시인이 "같은 잘못을 반복해도 다시 시작할 수 있는 희망이 있어 우리는 다시 웃을 수 있다."라고 했다고 합니다.<br>
연말에 참 잘 어울리는 글인 것 같습니다.<br><br>

2019년이라는 다시 시작할 수 있는 희망이 우리에게 있습니다. 지나간 2018년에 대한 짧은 반성과  다가오는 새해에 대한 설계를 하면서 행복하게 연말 마무리하시길 바랍니다.
<br><br>
새해에는 좋은 일이 더욱 많으시고, 건강하십시오.
      </h3>
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


export default {
  name: 'Y2018',
  components: {
          particlesJS,
          VueFlux,
          FluxParallax,
          Modal
  },
  data () {
    return {
      time: 0,
      duration: 5000,
      showModal: false,
      item:{
        title:"제목",
        description:"내용",
        winner:"김겨엉수"
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
     },

     bgClick(){
       console.log("background Click")
     },
    hide () {
     },
    showDynamicComponentModal () {
      
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

<style>
h3{
  font-family: 'Swagger';
  font-size: 22px;
}
.modal{
  width: 100%;
  height: 100%;
}
.row {
  padding-top: 40px;
  height: 250vh;
}
.big-row {
  height: 200vh;
}
.Y2018{
        overflow-x: hidden;

}
.logo{
  padding-top: 100px;
  width:50%;
  height:50%;
}
.mainHeader{
    font-size: 45px;
    line-height: 50px;
letter-spacing :0.5px;
}
.textContainer{

    position:relative;
    bottom: -webkit-calc(-100% + 850px);
    bottom:calc(-100% + 850px);

    padding-left: 50px;
    padding-right: 50px;
    text-align: left;

}
 .particle{
    position: absolute;
    width: 99%;
    height:282vh;
    background-repeat: no-repeat;
    opacity: 1;
}
.bottomText{
  padding-top: 150px;
  text-align: center;
}




</style>
