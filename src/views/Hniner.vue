<template>
    <div><h1>HNINER</h1>
        <div class="spinner">
        <div class="show-area">
         <ul class="board">
             <li>1</li>
             <li>2</li>
             <li>3</li>
             <li>4</li>
             <li>5</li>
             <li>6</li>
             <li>7</li>
             <li>8</li>
             <li>9</li>
             <li>10</li>
        </ul>
        </div>
    </div>
    
    
    </div>

</template>

<script>
export default {

}
</script>

<style lang="scss">

// Spinner Module 

// Count Of Items in spinner_board sets correct time offset and animation offsets
$item-count: 10;
  
.spinner {

  //Module Font Settings
 // font-family: sans-serif;
  color: #ffffff;
  
  // spinner list reset 
  ul, li { list-style: none; padding: 0; margin: 0; }  
}

  .show-area {
    height: 1em;
    width: 90%;
    margin: 0 auto;
    line-height: 100%;
    position: relative;
    overflow:hidden;
    font-size: 5em;
  }

  .board {
    margin: 0 auto;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: $item-count * 2 + em;
    
    //Animation Controls
    -webkit-animation: slideshow $item-count + 2s linear infinite;
    -moz-animation:    slideshow $item-count + 2s linear infinite;

      li {
          width: 100%;
          height: 1em;
          padding: .5em 0;
          position: relative;
          left: 0;
          top: 0;
        
           //Animation Controls
          animation: slide linear 2s;
          animation-iteration-count: infinite;
          -webkit-animation: slide linear 2s;
          -webkit-animation-iteration-count: infinite;
          -moz-animation: slide linear 2s;
          -moz-animation-iteration-count: infinite;
      }
  } 


// ANIMATION KEYS

//overall container movement
@-webkit-keyframes slideshow {
  0%    { top: .5em; }
  100%  { top: -($item-count * 2 - 0.5 + em); }
}
@-moz-keyframes slideshow {
  0%    { top: .5em; }
  100%  { top: -($item-count * 2 - 0.5 + em); }
}

//animation to fake slowing down position

@-webkit-keyframes slide{
  0% {
    left: 0;
    top: 0;
    opacity:0;
    transform:  rotate(0deg) scaleX(1) scaleY(1) skewX(0deg) skewY(0deg) ;
  }
  50% {
    left: 0;
    top: 0;
    opacity:0.75;
    transform:  rotate(0deg) scaleX(1) scaleY(1) skewX(0deg) skewY(0deg) ;
  }
  75% {
    left: 0;
    top: .45em;
    opacity:1;
    transform:  rotate(0deg) scaleX(1) scaleY(1) skewX(0deg) skewY(0deg) ;
  }
  100% {
    left: 0;
    top: 0;
    opacity:0;
    transform:  rotate(0deg) scaleX(1) scaleY(1) skewX(0deg) skewY(0deg) ;
  }
}

@-moz-keyframes slide{
  0% {
    left: 0;
    top: 0;
    opacity:0;
    transform:  rotate(0deg) scaleX(1) scaleY(1) skewX(0deg) skewY(0deg) ;
  }
  50% {
    left: 0;
    top: 0;
    opacity:0.75;
    transform:  rotate(0deg) scaleX(1) scaleY(1) skewX(0deg) skewY(0deg) ;
  }
  75% {
    left: 0;
    top: .45em;
    opacity:1;
    transform:  rotate(0deg) scaleX(1) scaleY(1) skewX(0deg) skewY(0deg) ;
  }
  100% {
    left: 0;
    top: 0;
    opacity:0;
    transform:  rotate(0deg) scaleX(1) scaleY(1) skewX(0deg) skewY(0deg) ;
  }
}

</style>
