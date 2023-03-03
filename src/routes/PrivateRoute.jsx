import React from 'react';
//import { useSelector } from 'react-redux';
import {  Navigate, Outlet, } from 'react-router-dom';
import { useAtuhStore } from '../store/auth/useAuthStore';



const PrivateRoute = (updateNavbar) => {

    // const {status} =useSelector(store => store.auth)
   
    const {status}= useAtuhStore();

    return (
        
        status === 'authenticated' ? <Outlet/> : <Navigate to='/login'/>
        
    
    );

}

export default PrivateRoute;
