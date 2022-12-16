import { Cases, Dashboard, Home, Login } from "@mui/icons-material";
import { Route, Routes } from "react-router-dom";
import Register from "../components/Auth/Register/Register";
import Layout from "../Layout";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

import React from 'react';
import AdminDashboard from "../components/DashBoard/AdminDashboard/AdminDashboard";
import UserDashboard from "../components/DashBoard/UserDashboard/UserDashboard";
import Account from "../components/Auth/Account/Account";
import CreateCases from "../components/Cases/CreateCases/CreateCases";

const InRoute = ({updateNavbar}) => {
    return (
        <>
        <br/>
            <Routes> 
                  
                  <Route path="/" element={<Layout/>}>

                    <Route element={<PublicRoute/>}>
                      <Route path="/login" isPrivate={false} element={<Login setNavbar={() =>updateNavbar()}/>}/>
                      <Route path="/login/register" element={<Register/>}/>
                      
                    </Route>
                       
                    <Route element={<PrivateRoute/>}>

                      <Route path="/dashboard" element={<Dashboard/>}/>
                      <Route path="/createcases" element={<CreateCases/>}/>
                      <Route path="/home" element={<Home setNavbar={() =>updateNavbar()}/>}/>

                      <Route element={<AdminRoute/>} >
                          
                          <Route path="/admindashboard" element={<AdminDashboard />}/>
                          
                          <Route path="/account" element={<Account/>}/>

                      </Route>


                      <Route path="/userdashboard" element={<UserDashboard />}/>
                          
                      <Route path="/cases" element={<Cases/>}/>
                     
                      </Route>

                    
                  </Route>
                    
                    
                   
              </Routes>
        </>
    );
}

export default InRoute;
