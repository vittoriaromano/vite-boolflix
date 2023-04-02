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
        <div class="cards1">
             <!-- display lista di film -->
        <div class="card1" v-for="movie in store.movies"> 
            <MovieApp :info="movie"/>
       </div>
        <!-- display lista di serie-->
       <div class="card1" v-for="series in store.series"> 
            <MovieApp :info="series" />
       </div> 

        </div>
       
    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/variable.scss' as *;

main{
    background-color: $color1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top:60px ;
    //padding-left: 100px;
}
.cards1{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
    .card1{
        margin-right: 60px;
        margin-bottom:60px;
    }
}
</style>

