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
        info: Object,
        title: String
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
        }
    },
    title(){
        return info.title !== null ? info.title : info.name;
    }

}
</script>

<template>
    <div>
    <h2>{{ title }}</h2>
    <!-- <article>{{ language }}</article> -->
    <article>{{ info.original_title }}</article>
    <article>{{ info.vote_average }}</article>
    <country-flag :country='language' size='small'/>
    </div>
</template>
