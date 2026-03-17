import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { FaUser, FaBox, FaClipboardList, FaStore, FaSignOutAlt } from 'react-icons/fa';

const AdminSidebar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("Logging out...");
    navigate("/");
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
      : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2";

  return (
    // CHANGE: min-h-screen to h-full and bg-gray-900 to bg-gray-900 (or bg-blue-950 for blue)
    <div className="p-6 bg-gray-900 h-full text-white flex flex-col">
      {/* Website Brand Link */}
      <div className="mb-8">
        <Link to="/admin" className="text-2xl font-bold tracking-tighter hover:text-gray-300">
          Rabbit
        </Link>
        <p className="text-xs text-gray-500 font-medium uppercase mt-2">
          Admin Dashboard
        </p>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-2 flex-grow">
        <NavLink to="/admin/users" className={navLinkClass}>
          <FaUser />
          <span>Users</span>
        </NavLink>
        <NavLink to="/admin/products" className={navLinkClass}>
          <FaBox />
          <span>Products</span>
        </NavLink>
        <NavLink to="/admin/orders" className={navLinkClass}>
          <FaClipboardList />
          <span>Orders</span>
        </NavLink>
        <NavLink to="/" className={navLinkClass}>
          <FaStore />
          <span>Shop</span>
        </NavLink>
      </nav>

      {/* Logout Button */}
      <div className="mt-auto border-t border-gray-700 pt-4">
        <button
          onClick={handleLogout}
          className="w-full text-gray-300 hover:bg-red-600 hover:text-white py-3 px-4 rounded flex items-center space-x-2 transition-colors cursor-pointer"
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;