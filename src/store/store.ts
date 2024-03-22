import {configureStore} from "@reduxjs/toolkit";

import {genreReducer, headerReducer, movieReducer} from "./slices";


const store = configureStore({
    reducer: {
        header: headerReducer,
        movies: movieReducer,
        genres: genreReducer
    }
})

export {store}