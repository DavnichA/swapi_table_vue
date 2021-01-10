<template>
    <div class="table-row">
        <div class="every-row row-name">{{row_data.name}}</div>
        <div class="every-row row-birth">{{row_data.birth_year}}</div>
        <div class="every-row row-gender">{{row_data.gender}}</div>
        <div class="every-row row-height">{{row_data.height}}</div>
        <div class="every-row row-mass">{{row_data.mass}}</div>
        <div class="every-row row-hair">{{row_data.hair_color}}</div>
        <div class="every-row row-eye">{{row_data.eye_color}}</div>
        <div class="every-row row-films">{{row_data.films.length}}</div>
        <div class="every-row row-vehicles">{{row_data.vehicles.length}}</div>
    </div>
</template>

<script>
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
            return {}
        },

        computed: {

        }

    }
</script>

<style>
    .table-row {
        display: flex;
        justify-content: space-around;
    }
    .every-row {
        flex-basis: 11%;
        border-bottom: 1px solid #cccc;
        padding: 10px 0 10px 0;
    }
    .table-row:hover {
        cursor: pointer;
        background-color: #cccc
    }
</style>