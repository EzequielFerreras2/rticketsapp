import React from 'react';
//import { useSelector } from 'react-redux';
import { Navigate, Outlet,} from 'react-router-dom';
import { useAtuhStore } from '../store/auth/useAuthStore';



const AdminRoute = (updateNavbar) => {

    // const {status} =useSelector(store => store.auth)

    const {rol}= useAtuhStore();

    return (
        
        rol === 'admin' ? <Outlet/> : <Navigate to='home'/>
        
    
    )   ;
}

export default AdminRoute;
