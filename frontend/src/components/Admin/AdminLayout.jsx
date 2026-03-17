import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import AdminSidebar from './AdminSidebar';
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-gray-100 tracking-tighter">
            {/* Mobile Header: Visible ONLY on small screens */}
            <div className="flex bg-gray-900 items-center justify-between p-4  border-b border-gray-200 md:hidden">
                <button 
                    onClick={toggleSidebar} 
                    className="text-2xl text-gray-700 cursor-pointer"
                >
                    <FaBars />
                </button>
                <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
            </div>

            {/* Sidebar Overlay: Dims the main content on mobile */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black opacity-50 z-20 md:hidden transition-opacity"
                    onClick={toggleSidebar}
                ></div>
            )}

            {/* Sidebar Container: Slides on mobile, Static on desktop */}
            <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
                isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}>
                {/* Your dedicated sidebar component */}
                <AdminSidebar />
            </div>

            {/* Main Content: Opacity dims when sidebar is open on mobile */}
            <main className={`flex-1 p-6 transition-all duration-300 ${
                isSidebarOpen ? 'opacity-30 md:opacity-100' : 'opacity-100'
            }`}>
                <Outlet/>
            </main>
        </div>
    );
}

export default AdminLayout;