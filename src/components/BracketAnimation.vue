<template>
  <div id="BKAni">

<div class="area">{{msg}}</div>
  </div>
</template>

<script>
export default {
  name: 'BKAni',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">



.area {
  text-align: center;
  font-size: 6.5em;
  color: #fff;
  letter-spacing: -7px;
  font-weight: 500;
  text-transform: uppercase;
  animation: blur 1.5s ease-out infinite;
  text-shadow: 0px 0px 2.5px #fff, 0px 0px 3.5px #fff;
}

@keyframes blur {
  from {
    text-shadow:0px 0px 2.5px #fff,
      0px 0px 2.5px #fff, 
      0px 0px 5px #fff,
      0px 0px 5px #fff,
      0px 0px 5px #fff,
      0px 0px 5px #fff,
      0px 0px 5px #fff,
      0px 0px 5px #fff,
      0px 0px 10px #fff,
      0px 0px 10px #fff,
    
  }
}
</style>
