import { createSlice } from '@reduxjs/toolkit';

export const accountsSlice = createSlice({
name: 'account',

 initialState: {

  accounts:[],
  errorMessage: undefined,
  account:{},
  
 
 },
  reducers: {

    getUsers: (state, {payload} ) => {

      state.accounts = payload;
      state.errorMessage= undefined;

   },

   setUser: (state, {payload} ) => {

    state.account = payload;
    state.errorMessage= undefined;
 },
 }
});

// Action creators are generated for each case reducer function
export const { getUsers,setUser } = accountsSlice.actions;