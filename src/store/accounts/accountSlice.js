import { createSlice } from '@reduxjs/toolkit';

export const accountsSlice = createSlice({
name: 'account',

 initialState: {

  account:{},
  errorMessage: undefined,
 
 },
  reducers: {

    getUsers: (state, {payload} ) => {

      state.account = payload;
      state.errorMessage= undefined;

   },
 }
});

// Action creators are generated for each case reducer function
export const { getUsers } = accountsSlice.actions;