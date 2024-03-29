const baseURL = "https://api.themoviedb.org/3"

const movies = "/movie"
const genres = "/genre"

const urls = {
    movies: {
        link: `/discover${movies}`,
        byId: (id:number):string => `${movies}/${id}?append_to_response=videos`,
        searchLink: `/search${movies}`
    },
    genres: {
        link: `${genres}${movies}/list`,

    }
}

export {
    baseURL,
    urls
}