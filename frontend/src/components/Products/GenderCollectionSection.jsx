import React from 'react'
import mensCollectionImage from "../../assets/mens-collection.webp";
import womensCollectionImage from "../../assets/womens-collection.webp";
import { Link } from 'react-router-dom';

const GenderCollectionSection = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className='container mx-auto flex flex-col md:flex-row gap-6'>
            {/* Women's Collection */}
            <div className="relative flex-1 group overflow-hidden">
                <img 
                    src={womensCollectionImage} 
                    className="w-full h-[600px] md:h-[700px] object-cover transition-transform duration-700 group-hover:scale-105" 
                    alt="Women's Collection"
                />
                <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 bg-white p-6 shadow-sm">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 uppercase tracking-tight">
                        Women's Collection
                    </h2>
                    <Link 
                        to="/collections/all?gender=Women" 
                        className="text-sm font-medium text-gray-900 underline underline-offset-8 hover:text-gray-600 transition-colors uppercase tracking-widest"
                    >
                        Shop Now
                    </Link>
                </div>
            </div>

            {/* Men's Collection */}
            <div className="relative flex-1 group overflow-hidden">
                <img 
                    src={mensCollectionImage} 
                    className="w-full h-[600px] md:h-[700px] object-cover transition-transform duration-700 group-hover:scale-105" 
                    alt="Men's Collection"
                />
                <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 bg-white p-6 shadow-sm">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 uppercase tracking-tight">
                        Men's Collection
                    </h2>
                    <Link 
                        to="/collections/all?gender=Men" 
                        className="text-sm font-medium text-gray-900 underline underline-offset-8 hover:text-gray-600 transition-colors uppercase tracking-widest"
                    >
                        Shop Now
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default GenderCollectionSection