import { createSlice } from '@reduxjs/toolkit';

export const casesSlice = createSlice({
name: 'cases',
initialState: {

    Case: {},
    CasesByUser: [],
    Cases:[],

 },
  reducers: {

    getCases: (state, {payload} ) => {
        state.Cases = payload;
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