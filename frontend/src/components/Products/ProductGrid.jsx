import React from 'react'
import { Link } from 'react-router-dom';

const GRID_CLASSES = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10';

// `emptyState` is optional: pages that filter (like the collection page) pass
// one; elsewhere an empty list simply renders nothing.
const ProductGrid = ({ products, loading, error, emptyState }) => {
    if(loading){
        return (
            <div className={GRID_CLASSES} aria-busy="true" aria-label="Loading products">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div key={index} className='flex flex-col animate-pulse motion-reduce:animate-none'>
                        <div className='w-full aspect-[3/4] mb-4 bg-gray-100' />
                        <div className='h-3 w-3/4 bg-gray-100 mb-2' />
                        <div className='h-3 w-1/4 bg-gray-100' />
                    </div>
                ))}
            </div>
        );
    }
    if(error){
        return (
            <div className='py-24 text-center'>
                <p className='text-sm font-semibold text-gray-900'>Couldn't load products.</p>
                <p className='mt-2 text-sm text-gray-500'>Check your connection and refresh the page.</p>
                <p className='mt-4 text-xs text-gray-400'>{error}</p>
            </div>
        );
    }
    if((!products || products.length === 0) && emptyState){
        return emptyState;
    }
  return (
    <div className={GRID_CLASSES}>
        {(products || []).map((product, index) => (
            <Link key={index} to={`/product/${product._id}`} className='block group'>
                <div className='flex flex-col'>
                    {/* Image Container */}
                    <div className='relative w-full aspect-[3/4] mb-4 overflow-hidden bg-gray-100'>
                        <img
                            src={product.images?.[0]?.url}
                            alt={product.images?.[0]?.altText || product.name}
                            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                            loading="lazy"
                        />
                    </div>

                    {/* Product Info */}
                    <h3 className='text-sm font-semibold text-gray-900 uppercase tracking-wider mb-1'>
                        {product.name}
                    </h3>
                    <p className='text-gray-500 font-medium text-sm'>
                        ₹{product.price}
                    </p>
                </div>
            </Link>
        ))}
    </div>
  )
}

export default ProductGrid;
