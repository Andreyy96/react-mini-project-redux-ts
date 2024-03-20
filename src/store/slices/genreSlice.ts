import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { IResGenre} from "../../interfaces";
import {genreService} from "../../services";
import {AxiosError} from "axios";


interface IState {
    genresRes: IResGenre
}

const initialState: IState= {
    genresRes: null
}

const getAll = createAsyncThunk<IResGenre, void>(
    "genreSlice/getAll",
    async (_, thunkAPI) => {
        try {
            const {data} = await genreService.getAll()
            return data
        }
        catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)

const genreSlice = createSlice({
    name: "genreSlice",
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.genresRes = action.payload
        })
})

const {reducer: genreReducer, actions} = genreSlice

const genreActions = {
    ...actions,
    getAll
}

export {
    genreReducer,
    genreActions
}