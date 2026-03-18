import React, { useState } from 'react'
import { HiMagnifyingGlass, HiMiniXMark } from 'react-icons/hi2';

const Searchbar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const handleSearchToggle = () => {
        setIsOpen(!isOpen);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Search Term: ", searchTerm);
        setIsOpen(false);
    }

    return (
        <div className={`flex items-center justify-center w-full transition-all duration-300 ${isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50 border-b border-gray-100" : "w-auto"}`}>
            {isOpen ? (
                <form onSubmit={handleSearch} className="relative flex items-center justify-center w-full container mx-auto px-4">
                    <div className="relative w-full max-w-xl">
                        <input 
                            type="text" 
                            placeholder="Search our collection..." 
                            value={searchTerm} 
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="bg-gray-50 px-4 py-3 pl-12 pr-12 rounded-none focus:outline-none w-full placeholder:text-gray-400 text-sm border border-gray-200 focus:border-black transition-colors"
                        />
                        {/* Search Icon inside input */}
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                            <HiMagnifyingGlass className="h-5 w-5" />
                        </div>
                        {/* Submit Button */}
                        <button type="submit" className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-black cursor-pointer">
                            <HiMagnifyingGlass className="h-6 w-6 hidden md:block" />
                        </button>
                    </div>

                    {/* Close button */}
                    <button 
                        type="button" 
                        onClick={handleSearchToggle} 
                        className="ml-4 text-gray-600 hover:text-black cursor-pointer uppercase text-xs font-bold tracking-widest"
                    >
                        <HiMiniXMark className="h-6 w-6 md:hidden" />
                        <span className="hidden md:block">Close</span>
                    </button>
                </form>
            ) : (
                <button onClick={handleSearchToggle} className="hover:text-black transition-colors cursor-pointer">
                    <HiMagnifyingGlass className="h-6 w-6 text-gray-700" />
                </button>
            )}
        </div>
    )
}

export default Searchbar;