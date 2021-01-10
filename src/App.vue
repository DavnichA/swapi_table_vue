<template>
  <div id="app">
    <v-input 
      :users_data = 'USERS'
    />
    <v-table
      :users_data = 'USERS'
    />
    <!-- <main-page/> -->
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import vTable from './components/v-table';
import vInput from './components/v-input';
//import mainPage from './components/main-page';

export default {
  name: 'App',
  components: {
    vTable,
    vInput,
    //mainPage
  },
  computed: {
    ...mapGetters(['USERS'])
  },

  methods: {
    ...mapActions(['GET_USERS'])
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
  margin-top: 60px;
}
</style>
