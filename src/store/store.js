import { configureStore } from '@reduxjs/toolkit'
import { accountsSlice } from './accounts/accountSlice'
import { authSlice } from './auth/authSlice'
import { categorySlice } from './category/categorySlice'



export const store = configureStore({
  reducer: {
   
  account:accountsSlice.reducer,
  auth:authSlice.reducer,
  category:categorySlice.reducer,
   

  },
})