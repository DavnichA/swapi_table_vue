<template>
  <div id="app">
    <main-page/> 
  </div>
</template>

<script>
import mainPage from './components/main-page';

export default {
  name: 'App',
  components: {
    mainPage
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 10vh;
  height: 100%;
}
body {
  background-color: #312c51 !important;
}
</style>
