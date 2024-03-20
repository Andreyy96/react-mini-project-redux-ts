import {createSlice} from "@reduxjs/toolkit";

interface IState {
    flag: boolean
    switcherState: boolean
}

const initialState: IState = {
    flag: false,
    switcherState: JSON.parse(localStorage.getItem("switcher")) || false
}

const headerSlice = createSlice({
    name: "headerSlice",
    initialState,
    reducers: {
        setFlag: (state) => {
            state.flag = !state.flag
        },
        setSwitcherState: (state) => {
            state.switcherState = !state.switcherState
            localStorage.setItem("switcher", String(state.switcherState))
        }
    }
})

const {reducer: headerReducer, actions} = headerSlice

const headerActions = {
    ...actions
}

export {
    headerReducer,
    headerActions
}