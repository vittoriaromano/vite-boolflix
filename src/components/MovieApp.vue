<script>
import SearchBox from './SearchBox.vue';
export default{
    name: 'Movies',
    components:{
       SearchBox
    },
    props:{
        info: Object
    },

}
</script>

<template>
    <div>
    <h2>{{ info.title }}</h2>
    <article>{{ info.original_language }}</article>
    <article>{{ rating }}</article>
    </div>
</template>
