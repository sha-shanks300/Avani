import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { HiBars3BottomRight, HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi2";
import Searchbar from './Searchbar';
import CartDrawer from '../Layout/CartDrawer';
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [navDrawerOpen, setNavDrawerOpen] = useState(false);

    const toggleNavDrawer = () => setNavDrawerOpen(!navDrawerOpen);
    const toggleCartDrawer = () => setDrawerOpen(!drawerOpen);

    return (
        <>
            <nav className="container mx-auto flex items-center justify-between py-5 px-6">
                {/* Left - Logo */}
                <div>
                    <Link to="/" className="text-2xl font-bold uppercase tracking-widest text-gray-900">
                        Rabbit
                    </Link>
                </div>

                {/* Center - Navigation (Desktop) */}
                <div className="hidden md:flex space-x-8">
                    <Link to="/collections/all?gender=Men" className="text-gray-700 hover:text-black text-xs font-bold uppercase tracking-widest transition-colors">
                        Men
                    </Link>
                    <Link to="/collections/all?gender=Women" className="text-gray-700 hover:text-black text-xs font-bold uppercase tracking-widest transition-colors">
                        Women
                    </Link>
                    <Link to="#" className="text-gray-700 hover:text-black text-xs font-bold uppercase tracking-widest transition-colors">
                        Top Wear
                    </Link>
                    <Link to="#" className="text-gray-700 hover:text-black text-xs font-bold uppercase tracking-widest transition-colors">
                        Bottom Wear
                    </Link>
                </div>

                {/* Right - Icons */}
                <div className="flex items-center space-x-5">
                    <Link to="/admin" className='block bg-black px-2 py-0.5 rounded-none text-[10px] font-bold uppercase tracking-tighter text-white hover:bg-gray-800 transition-colors'>
                        Admin
                    </Link>
                    <Link to="/profile" className="hover:text-black transition-colors">
                        <HiOutlineUser className="h-6 w-6 text-gray-700"/>
                    </Link>
                    <button className="relative hover:text-black cursor-pointer transition-colors" onClick={toggleCartDrawer}>
                        <HiOutlineShoppingBag className="h-6 w-6 text-gray-700"/>
                        <span className="absolute -top-1 bg-[#ea2e0e] text-white text-[10px] font-bold rounded-full px-1.5 py-0.5">
                            4
                        </span>
                    </button>
                    
                    {/* Search Component */}
                    <Searchbar />

                    {/* Mobile Menu Trigger */}
                    <button onClick={toggleNavDrawer} className="md:hidden cursor-pointer">
                        <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
                    </button>
                </div>
            </nav>

            {/* Cart Drawer */}
            <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

            {/* Mobile Navigation Drawer */}
            <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 h-full bg-white shadow-2xl transform transition-transform duration-300 z-50 p-6 ${
                navDrawerOpen ? "translate-x-0" : "-translate-x-full"
            }`}>
                <div className="flex justify-end mb-8">
                    <button onClick={toggleNavDrawer} className="cursor-pointer">
                        <IoMdClose className="h-6 w-6 text-gray-600" />
                    </button>
                </div>
                
                <nav className="flex flex-col space-y-6">
                    <h2 className="text-xl font-bold uppercase tracking-widest mb-4">Menu</h2>
                    <Link to="/collections/all?gender=Men" onClick={toggleNavDrawer} className="text-sm font-semibold uppercase tracking-wider text-gray-600">Men</Link>
                    <Link to="/collections/all?gender=Women" onClick={toggleNavDrawer} className="text-sm font-semibold uppercase tracking-wider text-gray-600">Women</Link>
                    <Link to="#" onClick={toggleNavDrawer} className="text-sm font-semibold uppercase tracking-wider text-gray-600">Top Wear</Link>
                    <Link to="#" onClick={toggleNavDrawer} className="text-sm font-semibold uppercase tracking-wider text-gray-600">Bottom Wear</Link>
                </nav>
            </div>

            {/* Backdrop for Mobile Drawer */}
            {navDrawerOpen && (
                <div className="fixed inset-0 bg-black/40 z-40 md:hidden" onClick={toggleNavDrawer} />
            )}
        </>
    );
};

export default Navbar;