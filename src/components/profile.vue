<template>
  <div class="users">
      <p @click="$router.push({name: 'home'})">Home</p>
      <div class="profile_ava"><img :src="avatar" alt=""></div>
      <div class="info-user">
        <div class="personName"><h2>{{usdt.first_name}} {{usdt.last_name}}</h2></div>
        <div class="personId">Person Id: {{usdt.id}}</div>
        <div class="personEmail">Email: {{usdt.email}}</div>
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
    background-color: #2d3436;
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
    font-weight: bold;
  }
  .users p:hover {
    color: #1abc9c;
  }
  .profile_ava img {
    width: 20vw;
    border-radius: 50%;
  }
  .info-user {
    padding-right: 35%;
    padding-bottom: 12%;
  }
  .personId, .personEmail {
    font-weight: bold;
    font-size: 1rem;
  }

  .personName h2 {
    color: #1abc9c;
  }
</style>