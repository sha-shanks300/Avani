import React, { useState } from 'react';
import Topbar from '../Layout/Topbar';
import Navbar from './Navbar';
import CartDrawer from '../Layout/CartDrawer';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      {/* Topbar */}
      <Topbar />

      {/* Navbar - Passing the toggle function */}
      <Navbar onCartClick={toggleCartDrawer} />

      {/* Cart Drawer - Managed here for global overlay */}
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
    </header>
  );
};

export default Header;