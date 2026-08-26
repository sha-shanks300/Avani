import React from 'react';
import Topbar from '../Layout/Topbar';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      {/* Topbar */}
      <Topbar />

      {/* Navbar - owns its own cart drawer */}
      <Navbar />
    </header>
  );
};

export default Header;