import React from 'react';
import { useAtuhStore } from '../../store/auth/useAuthStore';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import UserDashboard from './UserDashboard/UserDashboard';

const Dashboards = () => {

    const {rol}= useAtuhStore();

    return (
        
           rol === "admin"? <AdminDashboard/>:<UserDashboard/> 
    );
}

export default Dashboards;
