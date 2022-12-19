import React from 'react';
import { useAtuhStore } from '../../store/auth/useAuthStore';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import UserDashboard from './UserDashboard/UserDashboard';

const Dashboards = () => {

    const {user}= useAtuhStore();

    return (

          user.rol === "Admin"? <AdminDashboard/>:<UserDashboard/> 
    );
}

export default Dashboards;
