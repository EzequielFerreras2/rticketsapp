import React from 'react';
import { Navigate, Outlet, } from 'react-router-dom';
import { useAtuhStore } from '../store/auth/useAuthStore';

const PublicRoute = (updateNavbar) => {
    
    // const {status} =useSelector(store => store.auth)
    const {status}= useAtuhStore();

       // not-authenticated //checking //authenticated
    return ( status === 'not-authenticated'  ? <Outlet/> : <Navigate to="/dashboard"/>)   ;

    
}

export default PublicRoute; 
