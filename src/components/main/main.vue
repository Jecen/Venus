<template>
  <i-row class="main">
    <i-col span="4" class="demo-list">
      demo-list
    </i-col>

    <i-col span="14" class="demo-window">
      demo-window
    </i-col>

    <i-col span="6" class="note-window">
      note-window
    </i-col>
  </i-row>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .main {
    width: 100%;
    height: 100%;

    .demo-list {
      background-image: linear-gradient(to top, #fad0c4 0%, #fad0c4 1%, #ffd1ff 100%);
      height: 100%;
      text-align: center;
      outline: dashed 1px;
      outline-offset: -4px;
    }

    @keyframes ants {
      to {
        background-position: 100%
      }
    }

    .demo-window {
      height: 100%;
      text-align: center;
      outline: dashed 1px;
      outline-offset: -4px;
    }

    .note-window {
      background-image: linear-gradient(to top, #fad0c4 0%, #fad0c4 1%, #ffd1ff 100%);
      height: 100%;
      text-align: center;
      outline: dashed 1px;
      outline-offset: -4px;
    }

  }

</style>

<script>

  import iView from 'iview'

  export default {
    name: 'main',
    data () {
      return {}
    },
    components: {
      'i-col': iView.Col,
      'i-row': iView.Row
    }
  }
</script>


