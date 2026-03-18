import React from 'react'
import { HiArrowPathRoundedSquare, HiOutlineCreditCard, HiShoppingBag } from "react-icons/hi2";

const FeatureSection = () => {
  return (
    <section className='py-16 px-4 bg-white border-t border-gray-100'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center'>
            {/* feature 1 */}
            <div className='flex flex-col items-center group'>
                <div className='mb-4 text-gray-900'>
                    <HiShoppingBag className="text-3xl" />
                </div>
                <h4 className='text-sm font-semibold tracking-widest uppercase mb-2'>
                    Free International Shipping
                </h4>
                <p className='text-gray-500 text-xs tracking-wide uppercase'>
                    On all orders over $100.00
                </p>
            </div>

            {/* feature 2 */}
            <div className='flex flex-col items-center group'>
                <div className='mb-4 text-gray-900'>
                    <HiArrowPathRoundedSquare className="text-3xl" />
                </div>
                <h4 className='text-sm font-semibold tracking-widest uppercase mb-2'>
                    45 Days Return
                </h4>
                <p className='text-gray-500 text-xs tracking-wide uppercase'>
                    Money back guarantee
                </p>
            </div>

            {/* feature 3 */}
            <div className='flex flex-col items-center group'>
                <div className='mb-4 text-gray-900'>
                    <HiOutlineCreditCard className="text-xl md:text-3xl" />
                </div>
                <h4 className='text-sm font-semibold tracking-widest uppercase mb-2'>
                    Secure Checkout
                </h4>
                <p className='text-gray-500 text-xs tracking-wide uppercase'>
                    100% secured checkout process
                </p>
            </div>
        </div>
    </section>
  )
}

export default FeatureSection