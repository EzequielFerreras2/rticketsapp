import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
name: 'auth',

initialState: {
 
    status:'checking', // not-authenticated //checking //authenticated
    user:{},
    errorMessage: undefined,

 },

  reducers: 
  {

    logIn:(state,{payload})=>{

        state.status='authenticated'; // not-authenticated //checking //authenticated
        state.user= payload.user;
        state.errorMessage= undefined;

    },

    logOut:(state,{payload})=>{

        state.status='not-authenticated'; // not-authenticated //checking //authenticated
        state.user = {};
        state.errorMessage= payload?.errorMessage;

    },

    chekingCredentials:(state)=>{

        state.status='checking'; // not-authenticated //checking //authenticated
        state.user={};
        state.errorMessage=undefined;


    }
 }
});

// Action creators are generated for each case reducer function
export const { logIn,logOut,chekingCredentials } = authSlice.actions;