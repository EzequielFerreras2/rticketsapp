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
import Dashboards from "../components/DashBoard/Dashboard";
import Homes from "../components/Home/Home";
import Cases from "../components/Cases/CreateCases/Cases" 
import UserRoute from "./UserRoute";
import Login from "../components/Auth/Login/Login";
import CategoryCases from "../components/Cases/CategoryCases/CategoryCases";
import AdminAccount from "../components/Auth/Account/AdminAccount/AdminAccount";

const InRoute = ({updateNavbar}) => {
    return (
        <>
       
            <Routes> 
                  
                  <Route path="/" element={<Layout/>}>

                    {/* Public Route*/}
                    <Route element={<PublicRoute/>}>
                      
                      <Route path="/login" isPrivate={false} element={<Login setNavbar={() =>updateNavbar()}/>}/>
                      <Route path="/register" element={<Register/>}/>
                      
                    </Route>

                    {/* Private Route*/}   
                    <Route element={<PrivateRoute/>}>

                      <Route path="/dashboard" element={<Dashboards/>}/>
                      <Route path="/cases/createcases" element={<CreateCases/>}/>
                      <Route path="/home" element={<Homes setNavbar={() =>updateNavbar()}/>}/>
                      <Route path="/account" element={<Account/>}/>

                        {/* Admin Route*/}
                      <Route element={<AdminRoute/>} >
                          
                          <Route path="/admindashboard" element={<AdminDashboard />}/>
                          <Route path="/cases/category" element={<CategoryCases/>}/>
                          <Route path="/adminaccount" element={<AdminAccount/>}/>

                      </Route>


                         {/* User Route*/}
                        <Route element={<UserRoute/>} >
                            
                            <Route path="/userdashboard" element={<UserDashboard />}/>

                        </Route>

                      
                      <Route path="/cases" element={<Cases/>}/>
                     
                    </Route>

                    
                  </Route>
                    
                    
                   
              </Routes>
        </>
    );
}

export default InRoute;
