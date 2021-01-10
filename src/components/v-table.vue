<template>
    <div class='table'>
        <div class='table-header'>
            <p>Name</p>
            <p class="sorted" @click="sortByBirth">Birth year <i class="material-icons">unfold_more</i></p>
            <p class="sorted" @click="sortByGender">Gender <i class="material-icons">unfold_more</i></p>
            <p class="sorted" @click="sortByHeight">Height <i class="material-icons">unfold_more</i></p>
            <p>Mass</p>
            <p>Hair color</p>
            <p>Eye color</p>
            <p>Amount films</p>
            <p>Amount vehicles</p>
        </div>
        <div class='table-content'>
            <table-row 
                v-for="row in paginetedUsers"
                :key="row.id"
                :row_data="row"
            />
        </div>
        <div class='pagination'>
            <div class="page"  
                v-for="page in pages" 
                :key="page"
                :class="{'page-selected': page === pageNumber }"
                @click="pageClick(page)"
                >{{page}}</div>
        </div>
    </div>
</template>

<script>
import tableRow from './table-row'

    export default {
        name: 'v-table',
        components: {
            tableRow
        },

        props: {
            users_data: {
                type: Array,
                default: () => {
                    return []
                }
            }
        },

        data() {
            return {
                usersPerPage: 5,
                pageNumber: 1
            }
        },

        computed: {
            pages() {
                return Math.ceil(this.users_data.length / 5);
            },
            paginetedUsers() {
                const from = (this.pageNumber -1) * this.usersPerPage;
                const to = from + this.usersPerPage;
                return this.users_data.slice(from, to);
            }
        },

        methods: {
            pageClick(page) {
                this.pageNumber = page;
            },
            sortByGender() {
                this.users_data.sort((a,b) => a.gender.localeCompare(b.gender))
            },
            sortByHeight() {
                this.users_data.sort((a,b) => a.height - b.height)
            },
            sortByBirth() {
                this.users_data.sort((a,b) => (
                    Number(a.birth_year.substring(0, a.birth_year.indexOf('BBY'))) - Number(b.birth_year.substring(0, b.birth_year.indexOf('BBY'))) ))

            }
        }

    }
</script>

<style>
    .table {
        max-width: 95vw;
        margin: 0 auto ;
    }

    .table-header {
        display: flex;
        justify-content: space-around;
        border-top: 1px solid #cccc;
        border-bottom: 1px solid #cccc;
        background-color: #f0c38e;
    }
    .table-header p {
        display: flex;
        justify-content: center;
        flex-basis: 11%;
        text-align: center;
    }
    .sorted {
        cursor: pointer;
    }

    .pagination {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 1vh;
    }

    .page {
        padding: 2px 4px;
        margin-right: 5px;
        border:1px solid black;
    }

    .page:hover {
        color: orange;
        cursor: pointer;
        background-color: darkgray;
    }

    .page-selected {
        color: orange;
        cursor: pointer;
        background-color: darkgray;
    }
</style>
