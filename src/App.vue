<template>
  <div class="container">
    <preloader />
    <HeaderView />
    <ContentView />
    <FooterView />
  </div>
</template>

<script>
  import preloader from './components/preloader.vue'
  import HeaderView from './views/HeaderView.vue'
  import ContentView from './views/ContentView.vue'
  import FooterView from './views/FooterView.vue'

  export default {
    name:'App',
    components: {
      'preloader':preloader,
      'HeaderView':HeaderView,
      'ContentView':ContentView,
      'FooterView':FooterView,
    }
  }

</script>
<style>
#app {
  font-family: var(--font);
  color: var(--letter-color);
}

.container {
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

@media screen and (max-width:1530px){
  .container {
    overflow: visible;
  }
    }
</style>
