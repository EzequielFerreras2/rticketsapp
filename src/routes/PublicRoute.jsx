import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, } from 'react-router-dom';

const PublicRoute = (updateNavbar) => {
    
    // const {status} =useSelector(store => store.auth)
    const status ="authenticated"

       // not-authenticated //checking //authenticated
    return ( status === 'not-authenticated'  ? <Outlet/> : <Navigate to="/home"/>)   ;

    // return(

    //     <Routes>
    //         <Route path="login" isPrivate={false} element={<Login setNavbar={() =>updateNavbar()}/>}/>
    //         <Route path="register" element={<Register/>}/>
    //     </Routes>
    // )
}

export default PublicRoute; 
