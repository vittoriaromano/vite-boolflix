<script>
import { store } from '../store';
import CountryFlag from 'vue-country-flag-next'
import SearchBox from './SearchBox.vue';
export default{
    name: 'Movies',
    components:{
       SearchBox,
       CountryFlag
    },
    data(){
      return store
    },
    props:{
        info: Object,
        //poster_path: String
    },
    computed:{
        language(){
            switch(this.info.original_language){
                case 'en':
                   return 'gb';
                case 'he':
                    return 'il';
                case 'zh':
                    return 'hk';
                case 'ja':
                    return 'jp';
                case 'cs':
                    return 'cz';
                case 'hi':
                    return 'in';
                case 'ko':
                    return 'kr';

                default:
                    return this.info.original_language;
            }
        },
        title(){
            return this.info.title || this.info.name;
        },
        original_title(){
            return  this.info.original_title || this.info.original_name
        },
        getVote() {
            return Math.ceil(this.info.vote_average / 2);
        },
    }
}
</script>

<template>
   <div>
      <img :scr="urlBase + info.poster_path"> 
    </div>
    <div>
    <h2>{{ title }}</h2>
    <article>{{ original_title }}</article>
    <div>
        <font-awesome-icon icon="fa-solid fa-star" v-for="n in getVote"/>
        <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5-getVote"/>
    </div>
    <country-flag :country='language' size='small'/>
    </div>
</template>

<style lang="scss" scoped>
img{ 
    display: block;
    height: 200px;
    width: 130px;
}
</style>