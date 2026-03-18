import React from 'react'
import { Link } from 'react-router-dom';

const ProductGrid = ({ products }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10'>
        {products.map((product, index) => (
            <Link key={index} to={`/product/${product._id}`} className='block group'>
                <div className='flex flex-col'>
                    {/* Image Container */}
                    <div className='relative w-full aspect-[3/4] mb-4 overflow-hidden bg-gray-100'>
                        <img 
                            src={product.images[0].url} 
                            alt={product.images[0].altText || product.name} 
                            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                            loading="lazy"
                        />
                    </div>
                    
                    {/* Product Info */}
                    <h3 className='text-sm font-semibold text-gray-900 uppercase tracking-wider mb-1'>
                        {product.name}
                    </h3>
                    <p className='text-gray-500 font-medium text-sm'>
                        ${product.price}
                    </p>
                </div>
            </Link>
        ))}
    </div>
  )
}

export default ProductGrid;