import React from 'react';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import UserDashboard from './UserDashboard/UserDashboard';

const Dashboard = () => {

    const rol ="admin"

    return (
        <div>
           { rol === "admin"? <AdminDashboard/>:<UserDashboard/>}
        </div>

    );
}

export default Dashboard;
