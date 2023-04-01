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
       <div v-for="series in store.series"> 
            <MovieApp :info="series" />
       </div> 
    </main>
</template>

<style lang="scss" scoped>
</style>

