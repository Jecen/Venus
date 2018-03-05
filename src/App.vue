<template>
  <Layer><router-view /></Layer>
</template>

<script>
import Layer from './components/layer'

export default {
  name: 'App',
  components: {
    Layer,
  },
};
</script>

