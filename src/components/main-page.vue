<template>
  <div class="Mainpage">
      <v-input />
      <v-table :users_data = 'USERS'/>
  </div>
</template>

<script>
 import {mapActions, mapGetters} from 'vuex';
 import vTable from './v-table';
import vInput from './v-input';

export default {
  name: 'main-page',
  components: {
    vTable,
    vInput
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

</style>