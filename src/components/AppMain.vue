<script>

import { store } from '../store';
import MovieApp from './MovieApp.vue';
export default{
    name: 'Main',
    components:{
        MovieApp
    },
    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <main>
        <div v-for="movie in store.movies"> 
            <MovieApp :info="movie"/>
       </div> 
    </main>
</template>

<style lang="scss" scoped>
</style>

<!-- <script>
import { store } from '../store';
//import SearchBox from './SearchBox.vue';
import MovieApp from './MovieApp.vue';
import axios from 'axios';

export default{
    name: 'Main',
    components:{
        //SearchBox,
        MovieApp
    },
    data(){
        store
    },
    methods:{
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
    }
}
</script>

<template>
    <main>
        <form>
        <div>
            <input type="text" id="search-box">
            <button type="submit" @click="search">Cerca</button>
        </div>
        </form>
        <div>
            <ul>
                <li v-for="movie in movies">
                    <MovieApp :info="movie"></MovieApp>
                </li>
                
            </ul>
        </div>
    </main>
</template>

<style lang="scss" scoped>

</style> -->