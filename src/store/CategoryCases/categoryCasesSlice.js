import { createSlice } from '@reduxjs/toolkit';

export const categoryCasesSlice = createSlice({
name: 'categoryCases',
initialState: {

 CategoryCases:[],
 CategoryCasesByCategory:[],
 CategoryCasesBySubCategory:[],
 },
  reducers: {
    
   getCategoryCases: (state, {payload} ) => {
 
    state.CategoryCases=payload;

   },
   getCategoryCasesByCategory: (state, {payload} ) => {
 
    state.CategoryCasesByCategory=payload;

   },
   getCategoryBySubCategory: (state, {payload} ) => {
 
    state.CategoryCasesBySubCategory=payload;

   },


 }
});

// Action creators are generated for each case reducer function
export const { getCategoryCases,getCategoryCasesByCategory,getCategoryBySubCategory } = categoryCasesSlice.actions;