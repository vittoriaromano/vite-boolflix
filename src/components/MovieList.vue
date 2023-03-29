<script>
import { store } from '../store';
import MovieApp from './MovieApp.vue';

export default{
    name: 'MovieList',
    components: {
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
    <div v-for="movie in store.movies">
         <MovieApp :title="movie.title" :language="movie.language"></MovieApp>
    </div>
</template>

<style lang="scss" scoped>

</style>