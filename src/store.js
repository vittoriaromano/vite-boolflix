import { reactive } from "vue"


export const store = reactive ({
    movies:[],
    moviesFound: 0,
    searchKey: '',
})