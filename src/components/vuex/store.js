import Vuex from 'vuex';
import Vue from 'vue'
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        users: [],
        names: []
    },
    actions: {
        GET_USERS({commit}) {
            return axios('https://swapi.dev/api/people', {
                method: 'GET'
            })
            .then((response) => {
                commit('SET_USERS', response.data.results),
                commit('SET_NAME', response.data.results.name)
            })
        }
    },
    mutations: {
        SET_USERS: (state, users) => {
            state.users = users
        },
        SET_NAME: (state, names) => {
            state.names = names
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