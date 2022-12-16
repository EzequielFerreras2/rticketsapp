import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet,} from 'react-router-dom';



const UserRoute = (updateNavbar) => {

    // const {status} =useSelector(store => store.auth)

    const rol = localStorage.getItem("rol")

    return (
        
        rol === 'user' ? <Outlet/> : <Navigate to='home'/>
        
    
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

export default UserRoute;
