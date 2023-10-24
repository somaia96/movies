import { allMovies } from "../types/moviesType"
export const moviesReducer=(state={movies:[],pageCount:0},actoin)=>{
    switch(actoin.type)
    {
        case allMovies:
            return {movies:actoin.data,pageCount:actoin.pages}
        default :
            return state;
    }
}