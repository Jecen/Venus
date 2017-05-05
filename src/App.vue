<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  @import "./styles/base.scss";

  #app {
    text-align: center;
    color: #2c3e50;
    margin-top: rem(90px);
  }

</style>
