<template>
  <div class="users">
      <p @click="$router.push({name: 'home'})">Home</p>
      <div class="profile_ava"><img :src="avatar" alt=""></div>
      <div class="info-user">
        <div class="">{{usdt.id}}</div>
        <div class="">{{usdt.email}}</div>
        <div class="">{{usdt.first_name}}</div>
        <div class="">{{usdt.last_name}}</div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex';

export default {
  name: 'profile',
  
    computed: {
      ...mapGetters(['USERDATA']),
        usdt() {
        return this.$store.getters.USERDATA
      },
      avatar() {
        return this.$store.getters.USERDATA.avatar
      }
  },
    methods: {
      ...mapActions(['GET_ID'])
      },
    mounted() {
      this.GET_ID(this.$route.params.id)
    }
}
</script>

<style>
  .users {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #000;
    position: absolute;
    height: 100%;
    width: 100%;
    color: #fff;
    top: 0;
    z-index: 999;
  }
  .users p {
    position: absolute;
    top: 1em;
    left: 1em;
    cursor: pointer;
  }
  .profile_ava img {
    width: 20vw;
  }
</style>