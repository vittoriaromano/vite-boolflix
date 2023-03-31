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
        search(){
            console.log('evento');
            this.$emit('ricerca');
            console.log(this.store.searchKey);
            
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


            //store.searchKey = '';
        },
    }
}
</script>

<template>
    <form @submit.prevent="$emit('ricerca')">
        <div>
            <label for="search-box">SearchBox</label>
            <input type="text" id="search-box" v-model="store.searchKey">
            <button type="submit" @click="search">Cerca</button>
        </div>
    </form>
    
</template>

<style lang="scss" scoped>
</style>

