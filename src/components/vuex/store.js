import Vuex from 'vuex';
import Vue from 'vue'
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        users: [],
        userData: {},
        id: 2
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
                    })
                }
                
            })
        },

        GET_USERS_DATA({commit}) {
            return axios(`https://reqres.in/api/users/${this.state.id}`, {method: 'GET'})
            .then((response) => {
                commit('SET_US_DATA', response.data.data)
            })
        },

        GET_ID({commit}, id) {
            commit('SET_ID', id),
            store.dispatch('GET_USERS_DATA')
        }

    },
    mutations: {
        SET_USERS: (state, users) => {
            state.users = state.users.concat(users);
        },
        SET_US_DATA: (state, user) => {
            state.userData = user
        },
        SET_ID: (state, id) => {
            state.id = id
        }

    },
    getters: {
        USERS(state) {
            return state.users;
        },
        USERDATA(state) {
            return state.userData
        }
    }

  })
  
  export default store;