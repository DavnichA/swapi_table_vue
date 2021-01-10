<template>
  <div class="main-page">
      <v-input :users_data = 'USERS'/>
      <v-table :users_data = 'USERS'/>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import vTable from './v-table';
import vInput from './v-input';

export default {
  name: 'v-input',
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