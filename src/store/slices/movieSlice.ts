import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {AxiosError} from "axios";
import {movieService} from "../../services";
import {IMovie, IPagination} from "../../interfaces";

interface IState {
    movies: IMovie[]
    page: number
    total_pages: number
    total_results: number
    movieInfo: IMovie
    searchWord: string
}

const initialState: IState = {
    movies: [],
    page: null,
    total_pages: 1,
    total_results: null,
    movieInfo: null,
    searchWord: null
}

const getAll = createAsyncThunk<IPagination<IMovie>, {page: string}>(
    "movieSlice/getAll",
    async ({page}, thunkAPI) => {
        try {
            const {data} = await movieService.getAll(page)
            return data
        }
        catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)

const getById = createAsyncThunk<IMovie, {id: number}>(
    "movieSlice/getById",
    async ({id}, thunkAPI) => {
        try {
            const {data} = await movieService.getById(id)
            return data
        }
        catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)


const getByGenreId = createAsyncThunk<IPagination<IMovie>, {id: string, page: string}>(
    "movieSlice/getByGenreId",
    async ({id,page}, thunkAPI) => {
        try {
            const {data} = await movieService.getByGenreId(+id, page)
            return data
        }
        catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)

const getByWord = createAsyncThunk<IPagination<IMovie>, {query: string, page: string}>(
    "movieSlice/getByWord",
    async ({query, page}, thunkAPI) => {
        try {
            const {data} = await movieService.getByWord(query, page)
            return data
        }
        catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)


const movieSlice = createSlice({
    name: "movieSlice",
    initialState,
    reducers: {
        setMovieInfo: (state, action) => {
            state.movieInfo = null
        }
    },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            const {page, total_pages, total_results, results} = action.payload
            state.movies = results
            state.page = +page
            state.total_pages = total_pages
            state.total_results =total_results
        })
        .addCase(getById.fulfilled, (state, action) => {
            state.movieInfo = action.payload
        })
        .addCase(getByGenreId.fulfilled, (state, action) => {
            const {page, total_pages, total_results, results} = action.payload
            state.movies = results
            state.page = +page
            state.total_pages = total_pages
            state.total_results =total_results
        })
        .addCase((getByWord.fulfilled), (state, action) => {
            const {page, total_pages, total_results, results} = action.payload
            state.movies = results
            state.page = +page
            state.total_pages = total_pages
            state.total_results =total_results
        })

})

const {reducer: movieReducer, actions} = movieSlice

const movieActions = {
    ...actions,
    getAll,
    getById,
    getByGenreId,
    getByWord
}

export {
    movieReducer,
    movieActions
}