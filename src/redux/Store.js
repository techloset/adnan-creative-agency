import { configureStore } from "@reduxjs/toolkit";
import CounterSlicer from "./slice/CounterSlicer";
export const Store = configureStore({
    reducer: {
counter:CounterSlicer
    }
})