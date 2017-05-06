<template>
  <div id="app">
    <shell>
      <div slot="status" @click="showRouter">
        1231231231
      </div>
      <div slot="content">
        <router-view></router-view>
      </div>
    </shell>
  </div>
</template>

<script>

  import Vue from 'vue'
  import IView from 'iview'
  import Shell from './components/shell/index'
  import 'iview/dist/styles/iview.css'

  Vue.use(IView)

  export default {
    name: 'app',
    methods: {
      showRouter(){
        console.log(this.$route)
      }
    },
    components: {
      'shell': Shell
    }
  }
</script>

<style lang="scss">
  @import "./styles/base.scss";

  html, body, #app {
    height: 100%;
    background: #eee;
  }
</style>
