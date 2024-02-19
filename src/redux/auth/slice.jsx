import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {register, logIn, logOut, fetchCurrentUser} from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
    extraReducers: (builder) => {
        builder
            .addCase(logOut.fulfilled, (state, action) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
            })
            .addCase(fetchCurrentUser.fulfilled, (state, action) => {
      state.user = action.payload;      
            })
            .addMatcher(isAnyOf(register.fulfilled, logIn.fulfilled), (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;      
            })
        .addMatcher(isAnyOf(register.fulfilled, logIn.fulfilled, fetchCurrentUser.fulfilled), (state, action) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
            })
    
    }
});

