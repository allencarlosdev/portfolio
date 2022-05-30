<template>
  <div class="container">
    <HeaderView />
    <ContentView />
    <FooterView />
  </div>
</template>

<script>
  import HeaderView from './views/HeaderView.vue'
  import ContentView from './views/ContentView.vue'
  import FooterView from './views/FooterView.vue'

  export default {
    name:'App',
    components: {
      'HeaderView':HeaderView,
      'ContentView':ContentView,
      'FooterView':FooterView,
    }
  }

</script>
<style>
#app {
  font-family: var(--font);
  /* background: var(--background-body); */
  color: var(--letter-color);
}

.container {
  /* background: blueviolet; */
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;

}
</style>
