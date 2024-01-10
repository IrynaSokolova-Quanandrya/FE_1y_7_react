import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userName: '',
        isLoggedIn: false
    },
    reducers:{
        logIn(state, action){
            state.userName = action.payload;
            state.isLoggedIn = true
        },
        logOut(state){
            state.userName = '';
            state.isLoggedIn = false
        }
    }
})

export const { logIn, logOut} = userSlice.actions;
export const userReducer = userSlice.reducer;