<script>

import { store } from '../store';
import SearchBox from './SearchBox.vue';
export default{
    name: 'Header',
    components:{
        SearchBox
    },
    data(){
        return {
            store
        }
    },
}
</script>
<template>
    <header>
        <h1>Boolifix</h1>
        <SearchBox @ricerca="search"></SearchBox>
    </header>
</template>
<style lang="scss" scoped>

</style>