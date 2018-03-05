<template>
  <div class='cp cp-layer'>
    <header>
      <div><img src='../assets/avatar.png' alt='ousututu'> <span>ousututu</span></div>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
export default {
  name: 'Layer',
}
</script>

<style>
body {
  margin: 0;
}
</style>

<style lang="less" scoped>
.cp-layer {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  main {
    text-align: center;
    margin-top: 40px;
    img {
      width: 200px;
      height: 200px;
    }
  }

  header {
    div {
      margin: 0;
      height: 56px;
      line-height: 56px;
      padding: 0 16px 0 24px;
      background-color: #35495e;
      color: #ffffff;
      img {
        float: left;
        margin-right: 10px;
        width: 40px;
        height: 40px;
        border-radius: 40px;
        margin-top: 8px;
      }
      span {
        font-size: 20px;
        letter-spacing: 0.02em;
        font-weight: 400;
      }
    }
  }
}
</style>

