import React, { useEffect, useRef, useState } from 'react'
import { FaFilter } from "react-icons/fa";
import FilterSidebar from '../components/Products/FilterSidebar';
import SortOptions from '../components/Products/SortOptions';
import ProductGrid from '../components/Products/ProductGrid';
import { useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsByFilters } from '../redux/slices/productSlice';

const CollectionPage = () => {

  const { collection } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);


  const sidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const queryParams = Object.fromEntries([...searchParams]);
    dispatch(fetchProductsByFilters({collection, ...queryParams}));
  }, [dispatch, collection, searchParams])

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

  // The heading reflects what's actually on screen rather than a fixed label.
  const search = searchParams.get("search");
  const category = searchParams.get("category");
  const title = search
    ? `Results for "${search}"`
    : category || (collection && collection !== "all" ? collection : "Shop all");

  const count = !loading && !error && products ? products.length : null;
  const countLabel = count === null ? null : `${count} ${count === 1 ? "product" : "products"}`;

  const emptyState = (
    <div className='py-24 text-center'>
      <p className='text-sm font-semibold text-gray-900'>No products match these filters.</p>
      <p className='mt-2 text-sm text-gray-500'>Remove a filter or raise the price limit to see more.</p>
      <button
        onClick={() => setSearchParams(new URLSearchParams())}
        className='mt-6 border border-black px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors cursor-pointer'
      >
        Show all products
      </button>
    </div>
  );

  return (
    <div className='flex flex-col lg:flex-row'>
      {/* Mobile Filter Trigger */}
      <div className="lg:hidden flex items-center justify-between px-4 pt-8 mb-4">
        <div>
          <h1 className='text-xl font-bold uppercase tracking-tight'>{title}</h1>
          {countLabel && <p className='text-xs text-gray-500 mt-1'>{countLabel}</p>}
        </div>
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

      {/* Mobile: slide-out drawer. Desktop: sticky column pinned under the header.
          lg:translate-none / lg:z-auto drop the drawer's stacking context so the
          column scrolls beneath the sticky header instead of over it. */}
      <div
        ref={sidebarRef}
        className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full" } fixed inset-y-0 z-50 left-0 w-72 bg-white p-6 shadow-2xl overflow-y-auto [scrollbar-width:thin] transition-transform duration-300 lg:sticky lg:top-(--header-h) lg:h-[calc(100vh-var(--header-h))] lg:self-start lg:shrink-0 lg:translate-none lg:z-auto lg:w-64 lg:px-6 lg:py-8 lg:shadow-none lg:bg-transparent lg:border-r lg:border-gray-200`}
      >
        <FilterSidebar />
      </div>

      {/* Main Content */}
      <div className='flex-grow min-w-0 px-4 pb-16 lg:px-8 lg:pt-8'>
        <div className="hidden lg:flex items-center justify-between h-10 mb-8">
          <div className='flex items-baseline gap-3'>
            <h1 className='text-2xl font-bold uppercase tracking-tight'>{title}</h1>
            {countLabel && <span className='text-xs text-gray-500'>{countLabel}</span>}
          </div>
          <SortOptions />
        </div>

        {/* Mobile Sort display adjustment */}
        <div className="lg:hidden mb-6">
           <SortOptions />
        </div>

        {/* Product Grid */}
        <ProductGrid products={products} loading={loading} error={error} emptyState={emptyState} />
      </div>
    </div>
  )
}

export default CollectionPage;
