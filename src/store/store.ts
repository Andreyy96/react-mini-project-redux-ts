import {configureStore} from "@reduxjs/toolkit";

import {genreReducer, headerReducer, loadingReducer, movieReducer} from "./slices";



const store = configureStore({
    reducer: {
        header: headerReducer,
        movies: movieReducer,
        genres: genreReducer,
        loading: loadingReducer
    }
})

export {store}