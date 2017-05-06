<template>
  <div class="shell">
    <i-row type="flex" class="title-bar" justify="center">

      <i-col :xs="0" :sm="6" :md="5" :lg="4" class="icon-window">
        <img src="../../images/Jacen.png">
      </i-col>

      <i-col :xs="24" :sm="18" :md="16" :lg="16" class="status-window">
        <slot name="status"> status </slot>
      </i-col>

    </i-row>

    <i-row type="flex" class="content" justify="center">

      <i-col :xs="0" :sm="6" :md="5" :lg="4" class="list-window">
        <slot name="list">list</slot>
      </i-col>

      <i-col :xs="24" :sm="18" :md="16" :lg="16" class="demo-window">
        <slot name="content">content</slot>
      </i-col>

    </i-row>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../styles/base';

  .shell {
    width: 100%;
    height: 100%;
    padding-top: rem(100px);
    background: transparent;

    .title-bar {
      height: rem(100px);
      position: absolute;
      background: transparent;
      top: 0;
      left: 0;
      right: 0;

      .icon-window {
        background: #2a3950;
        height: 100%;
        text-align: center;

        img {
          margin-top: rem(20px);
        }
      }

      .status-window {
        background: #364860;
        height: rem(100px);
        text-align: center;
      }
    }

    .content {
      width: 100%;
      height: 100%;
      background: transparent;

      .list-window {
        background: #364860;
        height: 100%;
        text-align: center;
      }

      .demo-window {
        height: 100%;
        text-align: center;
        padding: rem(20px);
        background: linear-gradient(#fff 0%, #fff 100%) content-box,
        linear-gradient(#f5f7ff 0%, #f5f7ff 100%) border-box;

      }

    }
  }

</style>

<script>

  import iView from 'iview'

  export default {
    name: 'shell',
    data () {
      return {}
    },
    components: {
      'i-col': iView.Col,
      'i-row': iView.Row
    }
  }
</script>
