import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/CounterSlicer";
import authSlice from './slice/authSlice'
// import firebaseUtils from "./firebaseUtils";
export const Store = configureStore({
    reducer: {
        counter: counterReducer,
        authSlice,
        // firebaseUtils
    }
})