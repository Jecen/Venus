<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

  import Vue from 'vue'
  import IView from 'iview'
  import 'iview/dist/styles/iview.css'

  Vue.use(IView)

  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  @import "./styles/base.scss";
  html, body, #app{
    height: 100%;
  }
</style>
