<template>
    <div class="table-row">
        <router-link 
            :to="{ name: 'users', params: {id: row_data.id}}"
            class="s_users"
            >
                <div class="every-row row-img"><img :src="avatar" alt=""></div>
                <div class="every-row row-id">{{row_data.id}}</div>
                <div class="every-row row-first-name">{{row_data.first_name}}</div>
                <div class="every-row row-last-name">{{row_data.last_name}}</div>
                <div class="every-row row-email">{{row_data.email}}</div>
            </router-link>

    </div>
</template>

<script>
import {mapActions} from 'vuex';
    export default {
        name: 'table-row',

        props: { 
            row_data: {
                type: Object,
                default: () => {
                    return {}
                }
            }
        },
        data() {
            return{
                avatar: this.row_data.avatar,
                id: this.$route.params.id
            } 
        },

        methods: {
            ...mapActions({
                add: 'GET_USERS_DATA'
            }) 
        },

    }
</script>

<style>
    .s_users {
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
        color: #fff;
    }
    .every-row {
        flex-basis: 11%;
        border-bottom: 1px solid #cccc;
        padding: 10px 0 10px 0;
        flex-grow: 1;
        
    }
    .table-row:hover {
        cursor: pointer;
        background-color: #16a085;
    }
    .row-img img{
        width: 100px;
        height: 100px;
    }
</style>