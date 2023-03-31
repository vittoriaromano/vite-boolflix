import { reactive } from "vue"


export const store = reactive ({
    config:{
        url:'https://api.themoviedb.org/3/',
        endpointMovie:'search/movie',
        endpointSeries:'search/tv',
        apiKey:'0bca381b300b7e831988b09a510fb6c6',
        defaultLang:'it-IT'
    },
    movies:[],
    series: [],
    searchKey: '',

})