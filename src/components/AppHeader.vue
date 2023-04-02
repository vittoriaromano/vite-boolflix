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
        <div>
            <h1>Boolifix</h1>
            <!-- connessione alla chiamata axios dei film/serie -->
            <SearchBox @ricerca="search"></SearchBox>

        </div>
        
    </header>
</template>
<style lang="scss" scoped>
@use '../assets/scss/variable.scss' as *;

header{
    padding: 70px;
    background-color: $color4;

    div{
        margin: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: $color3;
        padding: 40px;
        border-radius: 20px;
        &:hover{
            background-color: $color1;
            color: white;
        }
    }
}


</style>