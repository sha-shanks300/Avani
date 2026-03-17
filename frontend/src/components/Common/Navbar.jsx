import React from 'react'
import { Link } from 'react-router-dom';
import { HiBars3BottomRight, HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi2";
import Searchbar from './Searchbar';
import CartDrawer from '../Layout/CartDrawer';
import { useState } from 'react';
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [drawerOpen, setDrawerOpen]= useState(false);
    const [navDrawerOpen, setNavDrawerOpen]= useState(false);
    const toggleNavDrawer = () => {
      setNavDrawerOpen(!navDrawerOpen);
    }
    const toggleCartDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/*left-logo*/}
        <div>
            <Link to="/" className="text-2xl font-medium">
            Rabbit
            </Link>
        </div>
        {/*center -navigation*/}
        <div className="hidden md:flex space-x-6">
            <Link to="/collections/all" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
            Men
            </Link>
            <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
            Women
            </Link>
            <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
            Top Wear
            </Link>
            <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
            Bottom Wear
            </Link>
        </div>
        {/*right - icons*/}
        <div className="flex items-center space-x-4">
            <Link to="/admin" className='block bg-black px-2 rounded text-sm text-white'>Admin</Link>
            <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700"/>
            </Link>
            <button className="relative hover:text-black cursor-pointer" onClick={toggleCartDrawer}>
                <HiOutlineShoppingBag className="h-6 w-6 text-gray-700"/>
                <span className="absolute -top-1 bg-[#ea2e0e] text-white text-xs rounded-full px-2 py-0.5">
                    4
                </span>
            </button>
            {/* search */}
            <Searchbar/>
            <button onClick={toggleNavDrawer}className="md:hidden cursor-pointer">
                <HiBars3BottomRight className="h-6 w-6 text-gray-700"></HiBars3BottomRight>
            </button>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer}/>
      <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/2 h-full shadow-lg transform transition-transform duration-300 z-50 ${
        navDrawerOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer} className="cursor-pointer">
            <IoMdClose className="h-6 w-6 text-gray-600"/>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
