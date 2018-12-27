<template>
   <transition name="modal">
    <div class="dim">
        <div class = "lay" v-if = "this.type === 'test' ">
            <Spinner  name="ball-grid-pulse" noFadeIn = true  color="white"/>
        </div>
        <div class = "textlay" v-else>
           <h1 @click="start">시작하기</h1>
        </div>
    </div>
   </transition>
</template>

<script>
import Spinner from 'vue-spinkit'

export default {
    components: {
       Spinner
  },methods:{
      start(){
          this.$emit('startScroll');
      }
  },
  props:{
      type: String
  }

}
</script>

<style>
.dim {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}
.lay{
  position:absolute;
  width:100px;
  height:100px;
  left:50%; 
  top:50%;
  margin:-25px 0 0 -25px;
}
.textlay{
  position:absolute;
  width:100px;
  height:100px;
  left:50%; 
  top:50%;
  margin:-40px 0 0 -50px;

}
.modal-leave-active {
  opacity: 0;
}

</style>
