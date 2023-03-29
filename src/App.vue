<script>
import axios from 'axios';
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default{
  name: 'App',
  components:{
    AppHeader,
    AppMain
  },
  data(){
    return{
      store
    }
},
methods:{
  search(){
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=0bca381b300b7e831988b09a510fb6c6&query=ritorno+al+futuro', {
      params:{
        original_title: store.searchKey
      }
    })
    .then((response) => {
        console.log(response);
        this.store.movies = response.data.results;
        this.store.moviesFound = response.data.results.length;
    })
    .catch((error) => {
      console.log(error);
      this.store.movies = [];
      this.store.moviesFound = 0;
    })
  }
},
created(){
  this.search();
}
}
</script>

<template>
       <AppHeader></AppHeader>
       <AppMain @ricerca="search"></AppMain>
</template>

<style scoped>

</style>
