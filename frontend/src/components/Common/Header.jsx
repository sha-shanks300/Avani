import React, { useEffect, useRef } from 'react';
import Topbar from '../Layout/Topbar';
import Navbar from './Navbar';

const Header = () => {
  const headerRef = useRef(null);

  // Publish the header's height so sticky elements below it (e.g. the
  // collection filter sidebar) can pin themselves right under it.
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const observer = new ResizeObserver(() => {
      document.documentElement.style.setProperty("--header-h", `${header.offsetHeight}px`);
    });
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-white border-b border-gray-100">
      {/* Topbar */}
      <Topbar />

      {/* Navbar - owns its own cart drawer */}
      <Navbar />
    </header>
  );
};

export default Header;
