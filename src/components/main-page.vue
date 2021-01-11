<template>
  <div class="Mainpage">
      <v-input />
      <v-table :users_data = 'USERS'/>
  </div>
</template>

<script>
 import {mapGetters} from 'vuex';
 import vTable from './v-table';
 import vInput from './v-input';

export default {
  name: 'main-page',
  components: {
    vTable,
    vInput,

  },
  computed: {
    ...mapGetters(['USERS', 'USERDATA'])
  },
  
}
</script>

<style>

</style>