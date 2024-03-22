import {IGenre} from "./genreInterface";
import {IProdCompany} from "./productionCompanyInterface";
import {IProdCountry} from "./productionCountryInterface";
import {IVideo} from "./videoInterface";

export interface IMovie {
    genres: IGenre[]
    id: number
    original_title: string
    overview: string
    poster_path: string
    production_companies: IProdCompany[]
    production_countries: IProdCountry[]
    release_date: string
    runtime: number
    title: string
    vote_average: number
    videos: {results: IVideo[]}
}