<template>
  <Layer><router-view /></Layer>
</template>

<script>
import Layer from '../components/layer/index'

export default {
  name: 'Main',
  components: {
    Layer,
  },
};
</script>

