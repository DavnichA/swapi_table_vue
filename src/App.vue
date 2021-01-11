<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: 'App',
  methods: {
    ...mapActions(['GET_USERS', 'GET_USERS_DATA'])
  },

  mounted() {
    this.GET_USERS()
  }
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
