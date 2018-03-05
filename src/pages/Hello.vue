<template>
  <div class='hello'>
    <h1>{{msg}}</h1>
    <div id='lottie-div' class='lottie-container' />
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data() {
    return {
      msg: 'ousututu Welcome!',
    };
  },
  mounted() {
    const Container = document.getElementById('lottie-div')
    this.$lottie.loadAnimation({
      container: Container, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'static/animiation/data.json', // the path to the animation json
    })
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1,
h2 {
  font-weight: normal;
}
.lottie-container{
  width: 200px;
  height: 200px;
}
</style>
