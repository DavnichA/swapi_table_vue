<template>
  <div class="search">
   <b-form-input list="my-list-id"></b-form-input>
    <datalist id="my-list-id">
      <option v-for="size in sizes" :key="size">{{ size }}</option>
    </datalist>
  </div>
</template>

<script>


export default {
  name: 'v-input',
  components: {
    
  },
  computed: {
    
  },

  methods: {
    
  },
  data() {
      return {
        sizes: ['Small', 'Medium', 'Large', 'Extra Large'],
        name: ''
      }
  }

}
</script>

<style>
    .search {
        width: 20%;
        padding-bottom: 2em;
        margin-left: 2.5vw;
    }
</style>