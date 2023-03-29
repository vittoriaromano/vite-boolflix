<script>
import { store } from '../store';
export default{
    name: 'SearchBox',
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

        </div>
        <div>
           <button type="submit">Cerca</button>
        </div>
    </form>
    
</template>

<style lang="scss" scoped>


</style>