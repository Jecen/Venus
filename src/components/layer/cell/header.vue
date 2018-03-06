<template>
  <Header class='cp header-bar'>
    <Menu mode='horizontal' theme='dark' active-name='1'>
      <div class='layout-logo'>
        <img src='../../../assets/avatar.png' alt='ousututu'>
      </div>
      <div class='layout-nav'>
        <MenuItem name='1'>
          <Icon type='ios-navigate' />
          Item 1
        </MenuItem>
        <MenuItem name='2'>
          <Icon type='ios-keypad' />
          Item 2
        </MenuItem>
        <MenuItem name='3'>
          <Icon type='ios-analytics' />
          Item 3
        </MenuItem>
        <MenuItem name='4'>
          <Icon type='ios-paper' />
          Item 4
        </MenuItem>
      </div>
    </Menu>
  </Header>
</template>

<script>
export default {
  name: 'LayerHeader',
}
</script>

<style>

</style>

<style lang="less" scoped>
.header-bar {
  .layout-logo {
    float: left;
    width: 64px;
    height: 64px;
    padding: 10px 0;
    img {
      width: 44px;
      height: 44px;
      border-radius: 5px;
    }
  }
  .layout-nav {
    float: right;
  }
}
</style>

