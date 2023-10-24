import { allMovies } from "../types/moviesType";
import axios from "axios";
import { Auth,accepts,urls } from "../types/moviesType";

export const GetAllMovie=(page=1)=>{
return async (dispatch)=>{
    const options = {
        method:'GET',
        url:urls,
        params:{language:'ar',page:page},
        headers:{accept: accepts,
        Authorization: Auth}};
await axios.request(options)
        .then((response)=>dispatch({type:allMovies,data:response.data.results,pages:response.data.total_pages}))
        .catch((error)=>{console.error(error)})
        }
}

export const GetMovieSearch=(word)=>{

    return async (dispatch)=>{
        const options = {
            method:'GET',
            url:`https://api.themoviedb.org/3/search/movie?query=${word}&api_key=d19bbca7ae69a7587d2347165fcefeaf`,
            params:{language:'ar',page:1},
            headers:{accept: accepts,
            Authorization: Auth}};
    await axios.request(options)
    .then((response)=>dispatch({type:allMovies,data:response.data.results,pages:response.data.total_pages}))
    .catch((error)=>{console.error(error)})
            }
        }