import { createSlice } from '@reduxjs/toolkit';

export const categorySlice = createSlice({
name: 'category',
initialState: {
    Category:[],
    errorMessage: undefined,
 },
  reducers: {

    getCategory: (state, {payload}  ) => {
 
    state.Category = payload;
    state.errorMessage = undefined;

    },
 }
});

// Action creators are generated for each case reducer function
export const { getCategory } = categorySlice.actions;