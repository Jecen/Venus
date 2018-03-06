<template>
  <Sider
    ref='layerSider'
    collapsible
    hide-trigger
    @on-collapse='onCollapse'
    :class='["cell layer-sider", isCollapsed ? "collapsed" : ""]'>
    <Menu
      class='sider-menu'
      theme='dark'
      width='auto'
      :active-name='activeName'
      :open-names='openNames'
      @on-select='onMenuSelect'
      @on-open-change='onOpenChange'>
      <Submenu v-for='info of menuJson' :key='info.id' :name='info.id'>
        <template slot='title'>
          <Poptip title='提示标题' content='提示内容' placement='right'>
            <Icon class='s-icon' :type='info.icon' />
          </Poptip>
          <span class='s-span'>{{info.title}}</span>
        </template>
        <MenuItem
          class='c-menu'
          v-show='!isCollapsed'
          v-for='item of info.items'
          :key='item.id'
          :name='item.id'>
          {{item.name}}
        </MenuItem>
      </Submenu>
    </Menu>

    <div
      v-show='false'
      slot='trigger'
      class='sider-trigger'
      @click='toggleCollapse'>
      <Icon type='ios-arrow-back' />
    </div>
  </Sider>
</template>

<script>

const menuJson = [
  {
    title: 'Item 1',
    icon: 'ios-navigate',
    id: '1',
    items: [
      { id: '1-1', name: 'Option 1' },
      { id: '1-2', name: 'Option 2' },
      { id: '1-3', name: 'Option 3' },
    ],
  },
  {
    title: 'Item 2',
    icon: 'ios-keypad',
    id: '2',
    items: [
      { id: '2-1', name: 'Option 1' },
      { id: '2-2', name: 'Option 2' },
      { id: '2-3', name: 'Option 3' },
    ],
  },
  {
    title: 'Item 3',
    icon: 'ios-analytics',
    id: '3',
    items: [
      { id: '3-1', name: 'Option 1' },
      { id: '3-2', name: 'Option 2' },
      { id: '3-3', name: 'Option 3' },
    ],
  },
]

export default {
  name: 'LayerSider',
  data() {
    return {
      isCollapsed: false,
      menuJson,
      activeName: '',
      openNames: [],
    }
  },
  methods: {
    toggleCollapse() {
      this.$refs.layerSider.toggleCollapse()
    },
    onCollapse(isCollapsed) {
      this.isCollapsed = isCollapsed
    },
    onMenuSelect(name) {
      this.activeName = name
    },
    onOpenChange(names) {
      this.openNames = names
    },
  },
}
</script>

<style lang="less">
.layer-sider {
  position: relative;
  padding-bottom: 40px;
  .sider-trigger {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    i {
      color: #fff;
      font-size: 26px;
      transform: rotate(0deg);
      transition: transform 0.5s ease;
    }
  }
  .sider-menu {
    .s-icon {
      transform: translateX(0px);
      transition: font-size 0.2s ease, transform 0.2s ease;
      vertical-align: middle;
      font-size: 16px;
    }
    .s-span {
      display: inline-block;
      overflow: hidden;
      width: 69px;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: bottom;
      transition: width 0.2s ease 0.2s;
    }
  }
}
.collapsed {
  .sider-trigger {
    i {
      transform: rotate(-180deg);
    }
  }
  .sider-menu {
    .s-icon {
      transform: translateX(0px);
      transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
      vertical-align: middle;
      font-size: 22px;
    }
    .s-span {
      width: 0px;
      transition: width 0.2s ease;
    }
    .ivu-icon-ios-arrow-down {
      display: none;
    }
  }
}
</style>

