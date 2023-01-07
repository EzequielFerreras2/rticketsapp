import { createSlice } from '@reduxjs/toolkit';

export const subCategorySlice = createSlice({
name: 'subCategory',
initialState: {

 subCategory:[]

 },
  reducers: {
getSubCategory: (state, {payload} ) => {

    state.subCategory=payload;

   },
 }
});

// Action creators are generated for each case reducer function
export const { getSubCategory } = subCategorySlice.actions;