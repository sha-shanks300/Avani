import React from 'react'
import { Link } from 'react-router-dom'
import featured from "../../assets/featured.webp"

const FeaturedCollection = () => {
  return (
    <section className='py-16 px-4 sm:px-6 lg:px-8'>
        <div className='container mx-auto flex flex-col-reverse lg:flex-row items-center bg-[#f3f4f6] overflow-hidden'>
            {/* Left Content */}
            <div className='lg:w-1/2 p-8 md:p-16 text-center lg:text-left'>
                <h2 className='text-sm uppercase tracking-widest text-gray-500 font-medium mb-2'>
                    Tap to Play
                </h2>
                <h2 className='text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight'>
                    Your favourite record, on your keys
                </h2>
                <p className='text-lg text-gray-600 mb-8 leading-relaxed max-w-lg'>
                    Brushed metal tags with an NFC chip inside. Tap one to any phone and
                    the album opens instantly — no app, no pairing, no battery.
                </p>
                <Link 
                    to="/collections/all" 
                    className='inline-block bg-black text-white px-8 py-4 rounded-none text-sm font-medium uppercase tracking-widest hover:bg-gray-800 transition-colors duration-300'
                >
                    Shop Now
                </Link>
            </div>

            {/* Right Content */}
            <div className='lg:w-1/2 w-full'>
                <img 
                    src={featured} 
                    alt="Featured Collection" 
                    className='w-full h-[400px] lg:h-[500px] object-cover'
                />
            </div>
        </div>
    </section>
  )
}

export default FeaturedCollection