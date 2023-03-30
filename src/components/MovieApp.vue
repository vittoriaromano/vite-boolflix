<script>
import CountryFlag from 'vue-country-flag-next'
import SearchBox from './SearchBox.vue';
export default{
    name: 'Movies',
    components:{
       SearchBox,
       CountryFlag
    },
    props:{
        info: Object
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
                    return 'cz'

                default:
                    return this.info.original_language;
            }
        }
    }

}
</script>

<template>
    <div>
    <h2>{{ info.title }}</h2>
    <article>{{ language }}</article>
    <article>{{ info.vote_avarage }}</article>
    <country-flag :country='language' size='small'/>
    </div>
</template>
