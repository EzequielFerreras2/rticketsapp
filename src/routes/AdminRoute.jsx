import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet,} from 'react-router-dom';



const AdminRoute = (updateNavbar) => {

    // const {status} =useSelector(store => store.auth)

    const rol = localStorage.getItem("rol")

    return (
        
        rol === 'admin' ? <Outlet/> : <Navigate to='home'/>
        
    
    )   ;

    // return(

    //     <Routes>
            
    //         <Route path="/home" element={<Home setNavbar={() =>updateNavbar()}/>}/>
    //         <Route path="/admindashboard" element={<AdminDashboard />}/>
    //         <Route path="/userdashboard" element={<UserDashBoard />}/>
    //         
    //         <Route path="/" element={<Home/>}/>
    //         {/* <Route path='*' element={<PageNotFound/>}/> */}
            
    //     </Routes>
    // )
}

export default AdminRoute;
