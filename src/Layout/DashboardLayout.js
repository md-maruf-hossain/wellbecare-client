import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import NavigationBar from '../Pages/Shared/NavigationBar/NavigationBar';

const DashboardLayout = () => {
    return (
        <div>
            <NavigationBar/>
            <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet/>            
            </div> 
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    <li><Link>Sidebar Item 1</Link></li>
                    <li><Link>Sidebar Item 2</Link></li>
                </ul>
            </div>
        </div>
        </div>
    );
};

export default DashboardLayout;