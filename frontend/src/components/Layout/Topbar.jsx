import React from 'react'
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";

const Topbar = () => {
  return (
    // Refinement: Using a slightly deeper red or neutral black is more "standard" 
    // for high-end e-commerce, but keeping your red style with better transitions.
    <div className="bg-[#ea2e0e] text-white border-b border-white/10">
        <div className="container mx-auto flex justify-between items-center py-2 px-4 sm:px-6 lg:px-8">
            {/* Social Icons - Refinement: Added transition and subtle opacity for hover */}
            <div className="hidden md:flex items-center space-x-5">
                <a href="#" className="hover:opacity-75 transition-opacity duration-200">
                    <TbBrandMeta className="h-4 w-4"/>
                </a>
                <a href="#" className="hover:opacity-75 transition-opacity duration-200">
                    <IoLogoInstagram className="h-4 w-4"/>
                </a>
                <a href="#" className="hover:opacity-75 transition-opacity duration-200">
                    <RiTwitterXLine className="h-3.5 w-3.5"/>
                </a>
            </div>

            {/* Announcement - Refinement: Increased font-weight for legibility */}
            <div className="text-xs sm:text-sm font-medium tracking-wide flex-1 text-center">
                <span>We ship worldwide — Fast and reliable shipping!</span>
            </div>

            {/* Contact - Refinement: Added 'hidden sm:block' to prevent crowding on tiny screens */}
            <div className="text-xs sm:text-sm hidden sm:block">
                <a href="tel:+1234567890" className="hover:text-gray-200 transition-colors font-medium">
                    +1 (234) 567-890
                </a>
            </div>
        </div>
    </div>
  )
}

export default Topbar;