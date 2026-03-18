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
        <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
            {/* Mobile Header */}
            <div className="flex bg-white items-center justify-between p-4 border-b border-gray-200 md:hidden">
                <button 
                    onClick={toggleSidebar} 
                    className="text-xl text-gray-900 cursor-pointer p-2 hover:bg-gray-100 transition-colors"
                >
                    <FaBars />
                </button>
                <h1 className="text-sm font-bold uppercase tracking-widest text-gray-900">
                    Rabbit Admin
                </h1>
            </div>

            {/* Sidebar Overlay */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black/40 z-40 md:hidden transition-opacity duration-300"
                    onClick={toggleSidebar}
                ></div>
            )}

            {/* Sidebar Container */}
            <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
                isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}>
                <AdminSidebar />
            </div>

            {/* Main Content Area */}
            <main className={`flex-1 transition-opacity duration-300 ${
                isSidebarOpen ? 'opacity-30 md:opacity-100 pointer-events-none md:pointer-events-auto' : 'opacity-100'
            }`}>
                <div className="p-6 md:p-10 lg:p-12 max-w-7xl mx-auto">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}

export default AdminLayout;