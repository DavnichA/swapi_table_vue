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
                let pages = response.data.total_pages;
                for (let i = 1; i <= pages; i++) {
                    axios(`https://reqres.in/api/users/?page=${i}`, {method: 'GET'})
                    .then((response) => {
                        commit('SET_USERS', response.data.data)
                        console.log('hi')
                    })
                }
                
            })
        }
    },
    mutations: {
        SET_USERS: (state, users) => {
            state.users = state.users.concat(users);
        }

    },
    getters: {
        USERS(state) {
            return state.users;
        },
        NAMES(state) {
            return state.names;
        }
    }

  })
  
  export default store;