<template>
  <main class="app">
    <nabvar/>
    <home/>
    <x-footer/>
  </main>
</template>

<script>
import Home from './views/Home.vue';
import Nabvar from './components/Navbar.vue';
import xFooter from './components/xFooter.vue';

export default {
  name: 'App',
  components: {
    Home,
    Nabvar,
    xFooter,
  }

}
</script>

<style>
  .app {
    background-color: #393f4d;
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
  }

  h1 {
    color: #feda6a;
  }
</style>