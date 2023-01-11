import { createSlice } from '@reduxjs/toolkit';

export const categoryCasesSlice = createSlice({
name: 'categoryCases',
initialState: {

 CategoryCases:[]

 },
  reducers: {
getCategoryCases: (state, {payload} ) => {
 
    state.CategoryCases=payload;

   },
 }
});

// Action creators are generated for each case reducer function
export const { getCategoryCases } = categoryCasesSlice.actions;