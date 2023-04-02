<script>
import axios from 'axios';
import { store } from '../store';

export default{
    name: 'SearchBox',
    data(){
        return{
            store,
        }
    },
    methods:{
        //chiamare api
        search(){
            console.log('evento');
            this.$emit('ricerca');
            console.log(this.store.searchKey);
            //API film con parametri
            axios.get(this.store.config.url + this.store.config.endpointMovie, {
             params:{
                api_key:this.store.config.apiKey,
                language:this.store.config.defaultLang,
                query:this.store.searchKey
            },
            })
            .then((response) => {
                    console.log(response.data);
                    this.store.movies = response.data.results;
            });
            //API serie con parametri
            axios.get(this.store.config.url + this.store.config.endpointSeries,{
                params:{
                    api_key:this.store.config.apiKey,
                    language:this.store.config.defaultLang,
                    query:this.store.searchKey
                }
            })
            .then((response) => {
                    console.log(response.data);
                    this.store.series = response.data.results;
            });


            store.searchKey = '';
        },
    }
}
</script>

<template>
    <!-- prevenire il reload della pagina e colegamento alla ricerca -->
    <form @submit.prevent="$emit('ricerca')">
        <div>
            <label for="search-box">SearchBox</label>
            <input type="text" id="search-box" v-model="store.searchKey">
            <!-- collegamento ricerca api -->
            <button type="submit" @click="search">Cerca</button>
        </div>
    </form>
    
</template>

<style lang="scss" scoped>
@use '../assets/scss/variable.scss' as *;

label{
    display: none;
}
input{
    width: 12.25rem;
    border: 0;
    border-radius: 20px;
    padding: 5px;
}
button{
    background-color: white;
    margin-left: 10px;
    padding: 10px;
    border: 1px solid $color1;
    border-radius: 30px;
}
</style>

