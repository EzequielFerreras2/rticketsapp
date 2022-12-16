import React from 'react';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import UserDashboard from './UserDashboard/UserDashboard';

const Dashboards = () => {

    const user = JSON.parse(localStorage.getItem("user"));

    return (
            user.rol === "admin"? <AdminDashboard/>:<UserDashboard/> 
    );
}

export default Dashboards;
