import Vuex from 'vuex';
import Vue from 'vue'
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        users: []
    },
    actions: {
        GET_USERS({commit}) {
            return axios('https://reqres.in/api/users/', {
                method: 'GET'
            })
            .then((response) => {
                commit('SET_USERS', response.data.data)
            })
        }
    },
    mutations: {
        SET_USERS: (state, users) => {
            state.users = users
        }

    },
    getters: {
        USERS(state) {
            return state.users;
        },
        NAMES(state) {
            return state.names
        }
    }

  })
  
  export default store;