import { createSlice } from "@reduxjs/toolkit"


export const initialState = {
    value: 0,
}


export const counterSlicer = createSlice({
    name: 'Counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        reset: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { increment, decrement, reset, } = counterSlicer.actions

export default counterSlicer.reducer