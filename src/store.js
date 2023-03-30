import { reactive } from "vue"


export const store = reactive ({
    config:{
        urlMovie:'https://api.themoviedb.org/3/search/movie',
        apiKey:'0bca381b300b7e831988b09a510fb6c6',
        defaultLang:'it-IT'
    },
    movies:[],
    searchKey: '',
})