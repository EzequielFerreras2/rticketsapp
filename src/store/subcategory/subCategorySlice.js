import { createSlice } from '@reduxjs/toolkit';

export const subCategorySlice = createSlice({
name: 'subCategory',
initialState: {

 SubCategory:[]

 },
  reducers: {
getSubCategory: (state, {payload} ) => {

    state.SubCategory=payload;

   },
 }
});

// Action creators are generated for each case reducer function
export const { getSubCategory } = subCategorySlice.actions;