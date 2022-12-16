import React from 'react';
import { Outlet } from 'react-router-dom';
import {useEffect, useState } from "react";
import { Navigate, Route, Routes} from "react-router-dom";

const Layout = () => {
    return (
        <Outlet/>
    );
}

export default Layout;
