import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { firebaseSignup, firebaseSignin } from '../../utils/firebaseUtils'

const initialState = ({
    isuser: false,
    user: null,
})

export const registerUser = createAsyncThunk('auth/registerUser', async (request, thunkAPI) => {
    try {
        const firebaseRes = await firebaseSignup(request)

        if (firebaseRes.error) {
            throw firebaseRes.error
        }

        return firebaseRes
    } catch (error) {
        thunkAPI.rejectWithValue(error)
    }
})

export const loginUser = createAsyncThunk('auth/loginUser', async (request, thankAPI) => {
    try {
        const firebaseRes = await firebaseSignin(request)
        return firebaseRes
    } catch (error) {
        thankAPI.rejectWithValue(error)
    }
})


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    reducers: {
        signout: (state, action) => {
            state.user = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.fulfilled, (state, action) => {
            console.log("success", action.payload);
            return { isuser: true, user: action.payload }
        })
        builder.addCase(registerUser.pending, (state, action) => {
        })
        builder.addCase(registerUser.rejected, (state, action) => {
            console.log("reject");
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            console.log("success", action.payload);
            return { isuser: true, user: action.payload }
        })
        builder.addCase(loginUser.pending, (state, action) => {
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            console.log("reject");
        })


    },
    // extraReducers: {
    //     [registerUser.pending]: (state, action) => {
    //         console.log('waiting...');
    //     },
    //     [registerUser.rejected]: (state, action) => {

    //     },
    //     [registerUser.fulfilled]: (state, action) => {
    //         console.log("success", action.payload.user);
    //         return { isuser: true, user: action.payload }
    //     },



})
export const { signout } = authSlice.actions
export default authSlice.reducer
