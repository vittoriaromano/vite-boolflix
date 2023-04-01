import { reactive } from "vue"


export const store = reactive ({
    config:{
        url:'https://api.themoviedb.org/3/',
        endpointMovie:'search/movie',
        endpointSeries:'search/tv',
        apiKey:'0bca381b300b7e831988b09a510fb6c6',
        defaultLang:'it-IT',
        // urlBase: "http://image.tmdb.org/t/p/",
        // imageSize: 'w342',
    },
    movies:[],
    series: [],
    searchKey: '',
    urlBase: 'http://image.tmdb.org/t/p/w700',
    //imagePath: 'poster_path'

})