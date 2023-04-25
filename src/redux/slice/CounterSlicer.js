import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    value: 0,
}

export const CounterSlicer = createSlice({
    name: 'Counter',
    initialState,
    reducers: {
        increment: (state,action) => {
            state.value += action.payload
        },
        decrement: (state) => {
            state.value -= 1
        },
        reset: (state, action) => {
            state.value = action.payload
        },

    }
})
export const { increment, decrement, reset } = CounterSlicer.actions

export default CounterSlicer.reducer