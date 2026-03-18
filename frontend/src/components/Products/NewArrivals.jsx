import React, { useRef, useState, useEffect } from 'react'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from 'react-router-dom';

const NewArrivals = () => {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [canScrollLeft, setCanScrollLeft] = useState(false);

    // Mock data (Keeping your structure)
    const newArrivals = [
        { _id: "1", name: "Stylish Jacket", price: 120, images: [{ url: "https://picsum.photos/500/500/?random=1" }] },
        { _id: "2", name: "Stylish Jacket", price: 120, images: [{ url: "https://picsum.photos/500/500/?random=2" }] },
        { _id: "3", name: "Stylish Jacket", price: 120, images: [{ url: "https://picsum.photos/500/500/?random=3" }] },
        { _id: "4", name: "Stylish Jacket", price: 120, images: [{ url: "https://picsum.photos/500/500/?random=4" }] },
        { _id: "5", name: "Stylish Jacket", price: 120, images: [{ url: "https://picsum.photos/500/500/?random=5" }] },
    ];

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    }

    const handleMouseMove = (e) => {
        if(!isDragging) return;
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 1.5; // Smooth multiplier
        scrollRef.current.scrollLeft = scrollLeft - walk;
    }

    const handleMouseUporLeave = () => setIsDragging(false);

    const scroll = (direction) => {
        const scrollAmount = direction === "left" ? -scrollRef.current.offsetWidth : scrollRef.current.offsetWidth;
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }

    const updateScrollButton = () => {
        const container = scrollRef.current;
        if (container) {
            const leftScroll = container.scrollLeft;
            const rightScrollable = container.scrollWidth > leftScroll + container.clientWidth + 1;
            setCanScrollLeft(leftScroll > 5);
            setCanScrollRight(rightScrollable);
        }
    }

    useEffect(() => {
        const container = scrollRef.current;
        if (container) {
            container.addEventListener("scroll", updateScrollButton);
            updateScrollButton();
            window.addEventListener("resize", updateScrollButton);
        }
        return () => {
            if (container) container.removeEventListener("scroll", updateScrollButton);
            window.removeEventListener("resize", updateScrollButton);
        };
    }, []);

    return (
        <section className="py-16 px-4 lg:px-0">
            <div className="container mx-auto relative">
                {/* Header Area */}
                <div className="flex items-center justify-between mb-10">
                    <div className="text-left">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Explore New Arrivals</h2>
                        <p className="mt-2 text-gray-500 max-w-md">
                            Discover the latest styles straight off the runway, freshly added to keep your wardrobe on the cutting edge.
                        </p>
                    </div>
                    
                    {/* Navigation Buttons - Positioned top-right for a modern look */}
                    <div className="hidden md:flex space-x-2">
                        <button 
                            onClick={() => scroll("left")} 
                            disabled={!canScrollLeft} 
                            className={`p-3 rounded-none border transition-all ${canScrollLeft ? "bg-white text-black border-black hover:bg-black hover:text-white" : "border-gray-200 text-gray-300"}`}
                        >
                            <FiChevronLeft className="text-xl"/>
                        </button>
                        <button 
                            onClick={() => scroll("right")} 
                            disabled={!canScrollRight} 
                            className={`p-3 rounded-none border transition-all ${canScrollRight ? "bg-white text-black border-black hover:bg-black hover:text-white" : "border-gray-200 text-gray-300"}`}
                        >
                            <FiChevronRight className="text-xl"/>
                        </button>
                    </div>
                </div>

                {/* Scrollable content */}
                <div 
                    ref={scrollRef} 
                    className={`flex space-x-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory ${isDragging ? "cursor-grabbing" : "cursor-grab"}`} 
                    onMouseDown={handleMouseDown} 
                    onMouseMove={handleMouseMove} 
                    onMouseUp={handleMouseUporLeave} 
                    onMouseLeave={handleMouseUporLeave}
                >
                    {newArrivals.map((product) => (
                        <div key={product._id} className="min-w-[80%] sm:min-w-[45%] lg:min-w-[25%] snap-start group">
                            <div className="relative overflow-hidden mb-4">
                                <img 
                                    src={product.images[0]?.url} 
                                    alt={product.name} 
                                    className="w-full h-[400px] object-cover rounded-none transition-transform duration-500 group-hover:scale-105" 
                                    draggable="false"
                                />
                            </div>
                            <div className="text-left">
                                <Link to={`/product/${product._id}`} className="block">
                                    <h4 className="font-semibold text-gray-900 uppercase tracking-wider text-sm">{product.name}</h4>
                                    <p className="mt-1 text-gray-500 font-medium">${product.price}</p>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default NewArrivals;