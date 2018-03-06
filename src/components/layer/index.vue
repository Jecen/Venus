<template>
  <Layout class='cp cp-layer'>

    <LayerHeader />

    <Layout style='flex-direction: row;'>

      <LayerSider />

      <Layout>
        <Breadcrumb :style='{margin: "16px"}'>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb>
        <Content :style='{padding: "24px", minHeight: "280px", background: "#fff"}'>
          <slot />
        </Content>
      </Layout>
    </Layout>
    <Footer class='layout-footer-center'>2018 &copy; Jacen</Footer>
  </Layout>
</template>

<script>
import LayerHeader from './cell/header'
import LayerSider from './cell/sider'

export default {
  name: 'Layer',
  components: {
    LayerHeader,
    LayerSider,
  },
}
</script>

<style>
body,
html {
  margin: 0;
  height: 100%;
}
</style>

<style lang="less" scoped>
.cp-layer {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  .layout-footer-center{
    text-align: center;
  }
}
</style>

