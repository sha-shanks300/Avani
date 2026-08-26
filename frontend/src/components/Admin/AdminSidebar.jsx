import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { FaUser, FaBox, FaClipboardList, FaStore, FaSignOutAlt } from 'react-icons/fa';
import logo from "../../assets/avaniadmin3.png";
import { useDispatch } from 'react-redux';
import { clearCart } from '../../redux/slices/cartSlice';
import { logout } from '../../redux/slices/authSlice';

const AdminSidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
    navigate("/");
  };

  // Refined: High-contrast sidebar links with sharp edges
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "bg-gray-800 text-white py-3 px-4 flex items-center space-x-3 border-l-4 border-white transition-all"
      : "text-gray-400 hover:bg-gray-800 hover:text-white py-3 px-4 flex items-center space-x-3 border-l-4 border-transparent transition-all";

  return (
    <div className="p-6 bg-gray-900 h-full text-white flex flex-col">
      {/* Website Brand Link */}

      

      <div className="mb-10 px-4">
        {/*
        <Link to="/admin" className="text-2xl font-bold uppercase tracking-widest hover:text-gray-300 transition-colors">
          Rabbit
        </Link>
        */}
        <Link to="/admin" className="text-2xl font-bold uppercase tracking-widest hover:text-gray-300 transition-colors">
          <img src={logo} alt="Avani" className="h-13 w-32 object-contain cursor-pointer -ml-8"/>
        </Link>
        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-2">
          Admin Panel
        </p>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-1 flex-grow">
        <NavLink to="/admin/users" className={navLinkClass}>
          <FaUser className="text-sm" />
          <span className="text-xs font-bold uppercase tracking-wider">Users</span>
        </NavLink>
        <NavLink to="/admin/products" className={navLinkClass}>
          <FaBox className="text-sm" />
          <span className="text-xs font-bold uppercase tracking-wider">Products</span>
        </NavLink>
        <NavLink to="/admin/orders" className={navLinkClass}>
          <FaClipboardList className="text-sm" />
          <span className="text-xs font-bold uppercase tracking-wider">Orders</span>
        </NavLink>
        <NavLink to="/" className={navLinkClass}>
          <FaStore className="text-sm" />
          <span className="text-xs font-bold uppercase tracking-wider">Shop</span>
        </NavLink>
      </nav>

      {/* Logout Button */}
      <div className="mt-auto border-t border-gray-800 pt-6">
        <button
          onClick={handleLogout}
          className="w-full text-gray-500 hover:text-white py-3 px-4 flex items-center space-x-3 transition-colors cursor-pointer group"
        >
          <FaSignOutAlt className="group-hover:text-red-500 transition-colors" />
          <span className="text-xs font-bold uppercase tracking-wider">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;