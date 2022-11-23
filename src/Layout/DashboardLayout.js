import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/SharedPages/NavigationBar/NavigationBar';

const DashboardLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <h1>Dashboard Layout</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardLayout;