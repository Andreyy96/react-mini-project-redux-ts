import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types";
import {IMovie, IPagination} from "../interfaces";


const movieService = {
    getAll: (page: string = "1"): IRes<IPagination<IMovie>> => apiService.get(urls.movies.link, {params: {page}}),
    getById: (id:number): IRes<IMovie> => apiService.get(urls.movies.byId(id)),
    getByGenreId: (with_genres: number, page: string = "1"): IRes<IPagination<IMovie>> => apiService.get(urls.movies.link, {params: {with_genres, page}}),
    getByWord: (query: string, page: string = "1"): IRes<IPagination<IMovie>> => apiService.get(urls.movies.searchLink, {params: {query, page}})
}

export {movieService}