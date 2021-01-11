<template>
  <div class="search">
   <b-form-input list="my-list-id" v-model="value"></b-form-input>
    <datalist id="my-list-id">
      <option v-for="size in sizes" :key="size">{{ size }}</option>
    </datalist>
    <b-button variant="info"><i class="material-icons">search</i></b-button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'v-input',
    data() {
      return {
        sizes: ['Small', 'Medium', 'Large', 'Extra Large'],
        name: '',
        value: ''
      }
    },

  computed: {
    ...mapGetters(['USERS']),
    
    filteredUsers() {
      return this.$store.getters.USERS.first_name.filter(item => {
        item.title.indexOf(this.value) !== -1
      })

    }
  }

}
</script>

<style>
    .search {
        display: flex;
        width: 20%;
        padding-bottom: 2em;
        margin-left: 2.5vw;
    }
    .btn-info {
        height: 2.5rem;
        background-color: #1abc9c !important;
        border-color: #1abc9c !important;
    }

    .btn-info:hover {
        background-color: #16a085 !important;
        border-color: #16a085 !important;
    }
</style>