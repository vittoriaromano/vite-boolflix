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
            
            axios.get('https://api.themoviedb.org/3/search/movie?api_key=0bca381b300b7e831988b09a510fb6c6&query=', {
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
        }
        
        
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

<!-- <script>
    search(){
            console.log('evento');
            console.log(this.store.searchKey)
            axios.get(this.store.config.urlMovie, {
                params:{
                    api_key:this.store.config.apiKey,
                    language:this.store.config.defaultLang,
                    query:this.store.config.searchKey
                }
            }).then((response) => {
                console.log(response.data);
                this.store.movies = response.data.results;
            });
        }
import MovieApp from './MovieApp.vue';
import { store } from '../store';
export default{
    name: 'SearchBox',
    components:{
        MovieApp
    },
    data(){
        return{
            store,
        }
    },
    methods:{
        testSubmit(){
            console.log('inviato');
            console.log(this.store.searchKey);
        }
    }
}
</script>

<template>
    <form @submit.prevent="$emit('domanda')">
        <div>
            <label for="search-box">SearchBox</label>
            <input type="text" id="search-box" v-model="store.searchKey">
            <button type="submit" @click="testSubmit">Cerca</button>
        </div>
    </form>
    
</template>

<style lang="scss" scoped>


</style> -->