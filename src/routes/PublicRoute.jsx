import React from 'react';
import { Navigate, Outlet, } from 'react-router-dom';

const PublicRoute = (updateNavbar) => {
    
    // const {status} =useSelector(store => store.auth)
    const user = JSON.parse(localStorage.getItem("user"));

       // not-authenticated //checking //authenticated
    return ( user.status === 'not-authenticated'  ? <Outlet/> : <Navigate to="/home"/>)   ;

    
}

export default PublicRoute; 
