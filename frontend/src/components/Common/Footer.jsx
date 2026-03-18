import React from 'react'
import { IoLogoInstagram } from 'react-icons/io';
import { RiTwitterXLine } from 'react-icons/ri';
import { TbBrandMeta } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { FiPhoneCall } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 py-16 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-4 sm:px-6 lg:px-8">
            {/* Newsletter Section */}
            <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-6">Newsletter</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                    Be the first to hear about new products, exclusive events, and online offers.
                </p>
                <p className="font-semibold text-xs text-gray-800 mb-6 uppercase tracking-wider">
                    Sign up and get 10% off your first order.
                </p>

                {/* Newsletter Form - Refinement: Square edges & cleaner border */}
                <form className="flex">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="p-3 w-full text-sm border border-gray-300 rounded-none focus:outline-none focus:border-black transition-all" 
                      required
                    />
                    <button 
                      type="submit" 
                      className="bg-black text-white px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-none hover:bg-gray-800 transition-all"
                    >
                      Subscribe
                    </button>
                </form>
            </div>

            {/* Shop Links */}
            <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-6">Shop</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                    <li><Link to="#" className="hover:text-black transition-colors">Men's Topwear</Link></li>
                    <li><Link to="#" className="hover:text-black transition-colors">Women's Topwear</Link></li>
                    <li><Link to="#" className="hover:text-black transition-colors">Men's Bottomwear</Link></li>
                    <li><Link to="#" className="hover:text-black transition-colors">Women's Bottomwear</Link></li>
                </ul>
            </div>

            {/* Support Links */}
            <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-6">Support</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                    <li><Link to="#" className="hover:text-black transition-colors">Contact Us</Link></li>
                    <li><Link to="#" className="hover:text-black transition-colors">About Us</Link></li>
                    <li><Link to="#" className="hover:text-black transition-colors">FAQs</Link></li>
                    <li><Link to="#" className="hover:text-black transition-colors">Features</Link></li>
                </ul>
            </div>

            {/* Contact & Socials */}
            <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-6">Follow Us</h3>
                <div className="flex items-center space-x-5 mb-8 text-gray-700">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                        <TbBrandMeta className="h-5 w-5"/>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                        <IoLogoInstagram className="h-5 w-5"/>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                        <RiTwitterXLine className="h-4 w-4"/>
                    </a>
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-2">Call Us</p>
                <p className="text-sm text-gray-600 font-medium">
                    <FiPhoneCall className="inline-block mr-2 mb-1"/>
                    0123-456-789
                </p>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="container mx-auto mt-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100 pt-8">
            <p className="text-gray-400 text-[11px] uppercase tracking-widest text-center">
                © 2026 Rabbit. All Rights Reserved.
            </p>
        </div>
    </footer>
  )
}

export default Footer;