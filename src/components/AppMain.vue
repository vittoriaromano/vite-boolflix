<script>
import SearchBox from './SearchBox.vue';
import MovieList from './MovieList.vue';

export default{
    name: 'Main',
    components:{
        SearchBox,
        MovieList
    },
    methods:{
        heandleSearch(){
            console.log('evento');
            this.$emit('ricerca');
        }
    }
}
</script>

<template>
    <main>
        <SearchBox @domanda="heandleSearch"></SearchBox>
        <MovieList></MovieList>
    </main>
</template>

<style lang="scss" scoped>

</style>