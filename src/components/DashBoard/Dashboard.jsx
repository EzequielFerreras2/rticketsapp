import React from 'react';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import UserDashboard from './UserDashboard/UserDashboard';

const Dashboards = () => {

    const rol =localStorage.getItem("rol")

    return (
        <div>
           { rol === "admin"? <AdminDashboard/>:<UserDashboard/>}
        </div>

    );
}

export default Dashboards;
