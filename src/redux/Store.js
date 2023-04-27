import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/CounterSlicer";


export const Store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})