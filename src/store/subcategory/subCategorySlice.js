import { createSlice } from '@reduxjs/toolkit';

export const subCategorySlice = createSlice({
name: 'subCategory',
initialState: {

 SubCategory:[],
 SubCategoryByCategory:[]
 },
  reducers: {
  getSubCategory: (state, {payload} ) => {

    state.SubCategory=payload;

   },

   getSubCategoryByCategory: (state, {payload} ) => {

    state.SubCategoryByCategory=payload;

   },

 }
});

// Action creators are generated for each case reducer function
export const { getSubCategory,getSubCategoryByCategory } = subCategorySlice.actions;