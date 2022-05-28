<template>
  <Layout />
</template>

<script>
import Layout from './components/Layout.vue';

export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>

<style>
#app {
  font-family: var(--font);
  background: var(--background-body);
  color: var(--letter-color);
}
</style>
