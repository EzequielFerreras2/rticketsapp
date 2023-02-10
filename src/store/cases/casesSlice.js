

import { createSlice } from '@reduxjs/toolkit';

export const casesSlice = createSlice({
name: 'cases',
initialState: {

    Case: null,
    CasesByUser: [],
    AllCases:[],

 },
  reducers: {

    getCases: (state, {payload} ) => {
        state.AllCases = payload;
    },
    getCasesByUser: (state, {payload} ) => {
        state.CasesByUser = payload;
    },
    getCase: (state, {payload} ) => {
        state.Case = payload;
    },


 }
});

// Action creators are generated for each case reducer function
export const { getCases,getCasesByUser,getCase } = casesSlice.actions;