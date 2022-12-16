import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
name: 'auth',

initialState: {
 
    status:'checking', // not-authenticated //checking //authenticated
    id:null,
    name:null,
    email:null,
    rol:null,
    company:null,
    errorMessage: null,

 },

  reducers: 
  {

    logIn:(state,{payload})=>{

        state.status='authenticated'; // not-authenticated //checking //authenticated
        state.id=payload.id;
        state.name=payload.name;
        state.email=payload.email;
        state.rol=payload.rol;
        state.company=payload.company;
        state.errorMessage= null;

    },

    logOut:(state,{payload})=>{

        state.status='not-authenticated'; // not-authenticated //checking //authenticated
        state.id=null;
        state.name=null;
        state.email=null;
        state.rol=null;
        state.company=null;
        state.errorMessage= payload?.errorMessage;

    },

    chekingCredentials:(state)=>{

        state.status="checking";

    }
 }
});

// Action creators are generated for each case reducer function
export const { logIn,logOut,chekingCredentials } = authSlice.actions;