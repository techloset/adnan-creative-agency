import { createSlice } from "@reduxjs/toolkit";



const initialState = ({
    user: '',
    error: '',
})


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, { payload }) => {
            console.log({ ...state })
            console.log(payload)
            return ({ ...state, ...payload })
        }
    }

})
export const { login } = authSlice.actions
export default authSlice.reducer