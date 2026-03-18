import React, { useEffect, useRef, useState } from 'react'
import { FaFilter } from "react-icons/fa";
import FilterSidebar from '../components/Products/FilterSidebar';
import SortOptions from '../components/Products/SortOptions';
import ProductGrid from '../components/Products/ProductGrid';

const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const sidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  }

  useEffect(() => {
    // Fixed: Properly cleanup event listeners
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    // Mocking an API fetch
    setTimeout(() => {
      const fetchedProducts = [
        { _id: 1, name: "Modern T-Shirt", price: 45, images: [{ url: "https://picsum.photos/500/500?random=3" }] },
        { _id: 2, name: "Casual Denim", price: 85, images: [{ url: "https://picsum.photos/500/500?random=4" }] },
        { _id: 3, name: "Linen Shirt", price: 60, images: [{ url: "https://picsum.photos/500/500?random=5" }] },
        { _id: 4, name: "Chino Pants", price: 75, images: [{ url: "https://picsum.photos/500/500?random=6" }] },
        { _id: 5, name: "Knit Sweater", price: 90, images: [{ url: "https://picsum.photos/500/500?random=7" }] },
        { _id: 6, name: "Oxford Shoes", price: 120, images: [{ url: "https://picsum.photos/500/500?random=8" }] },
        { _id: 7, name: "Silk Scarf", price: 30, images: [{ url: "https://picsum.photos/500/500?random=9" }] },
        { _id: 8, name: "Wool Coat", price: 150, images: [{ url: "https://picsum.photos/500/500?random=10" }] },
      ];
      setProducts(fetchedProducts);
    }, 500);
  }, []);

  return (
    <div className='flex flex-col lg:flex-row py-8'>
      {/* Mobile Filter Trigger */}
      <div className="lg:hidden flex items-center justify-between px-4 mb-4">
        <h2 className='text-xl font-bold uppercase tracking-tight'>Collection</h2>
        <button 
          onClick={toggleSidebar} 
          className='border border-black px-4 py-2 flex items-center text-xs font-bold uppercase tracking-widest cursor-pointer'
        >
          <FaFilter className='mr-2' /> Filter
        </button>
      </div>

      {/* Filter Sidebar - Refined Backdrop and Transition */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 lg:hidden transition-opacity" onClick={toggleSidebar} />
      )}
      
      <div 
        ref={sidebarRef} 
        className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full" } fixed inset-y-0 z-50 left-0 w-72 bg-white p-6 shadow-2xl transition-transform duration-300 lg:static lg:translate-x-0 lg:shadow-none lg:w-64 lg:p-0 lg:bg-transparent lg:border-r lg:border-gray-100`}
      >
        <FilterSidebar />
      </div>

      {/* Main Content */}
      <div className='flex-grow px-4 lg:px-8'>
        <div className="hidden lg:flex items-center justify-between mb-8">
          <h2 className='text-2xl font-bold uppercase tracking-tight'>All Collection</h2>
          <SortOptions />
        </div>
        
        {/* Mobile Sort display adjustment */}
        <div className="lg:hidden mb-6">
           <SortOptions />
        </div>

        {/* Product Grid */}
        <ProductGrid products={products} />
      </div>
    </div>
  )
}

export default CollectionPage;