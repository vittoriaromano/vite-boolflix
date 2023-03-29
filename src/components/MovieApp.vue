<script>
export default{
    name: 'Movies',
    props:{
        title: 'Titolo',
        originalTitle: 'Title',
        language: 'eng',
        rating: '',
    }
}
  
</script>

<template>
    <div>
         <h2>{{ title }}</h2>
         <article>{{ language }}</article>
         <article>{{ rating }}</article>
    </div>
</template>
<style lang="scss" scoped>
article{
    color: red;
    display: block;
}
</style>