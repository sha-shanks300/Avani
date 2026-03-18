import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const FilterSidebar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [filters, setFilters] = useState({
        category: "",
        gender: "",
        color: "",
        size: [],
        material: [],
        brand: [],
        minPrice: 0,
        maxPrice: 100,
    });

    const [priceRange, setPriceRange] = useState([0, 100]);

    const categories = ["Top Wear", "Bottom Wear"];
    const colors = ["Red", "Blue", "Black", "Green", "Yellow", "Gray", "White", "Pink", "Beige", "Navy"];
    const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
    const materials = ["Cotton", "Wool", "Denim", "Polyester", "Silk", "Linen", "Viscose", "Fleece"];
    const genders = ["Men", "Women"];
    const brands = ["Urban Threads", "Modern Fit", "Street Style", "Beach Breeze", "Fashionista", "ChicStyle"];

    useEffect(() => {
        const params = Object.fromEntries([...searchParams]);
        const initialFilters = {
            category: params.category || "",
            gender: params.gender || "",
            color: params.color || "",
            size: params.size ? params.size.split(",") : [],
            material: params.material ? params.material.split(",") : [],
            brand: params.brand ? params.brand.split(",") : [],
            minPrice: params.minPrice || 0,
            maxPrice: params.maxPrice || 100,
        };
        setFilters(initialFilters);
        setPriceRange([0, Number(params.maxPrice) || 100]);
    }, [searchParams]);

    const updateURLParams = (newFilters) => {
        const params = new URLSearchParams();
        Object.keys(newFilters).forEach((key) => {
            const value = newFilters[key];
            if (Array.isArray(value) && value.length > 0) {
                params.set(key, value.join(","));
            } else if (value && !Array.isArray(value)) {
                params.set(key, value);
            }
        });
        setSearchParams(params);
    };

    const handleFilterChange = (e) => {
        const { name, value, checked, type } = e.target;
        let newFilters = { ...filters };

        if (type === "checkbox") {
            const currentArray = [...(newFilters[name] || [])];
            if (checked) {
                currentArray.push(value);
            } else {
                const index = currentArray.indexOf(value);
                if (index > -1) currentArray.splice(index, 1);
            }
            newFilters[name] = currentArray;
        } else {
            newFilters[name] = value;
        }

        setFilters(newFilters);
        updateURLParams(newFilters);
    };

    const handlePriceChange = (e) => {
        const newMaxPrice = e.target.value;
        setPriceRange([0, newMaxPrice]);
        const newFilters = { ...filters, minPrice: 0, maxPrice: newMaxPrice };
        setFilters(newFilters);
        updateURLParams(newFilters);
    };

    return (
        <div className='p-4'>
            {/* Title - Refinement: Uppercase and tracking for brand feel */}
            <h3 className='text-sm font-bold text-gray-900 mb-8 uppercase tracking-widest'>Filters</h3>

            {/* Category Filter */}
            <div className='mb-8'>
                <label className='block text-xs font-semibold uppercase tracking-wider text-gray-800 mb-4'>Category</label>
                {categories.map((category) => (
                    <div key={category} className='flex items-center mb-2'>
                        <input 
                            type="radio" 
                            name="category" 
                            value={category} 
                            onChange={handleFilterChange} 
                            checked={filters.category === category}
                            className='mr-3 h-4 w-4 accent-black cursor-pointer'
                        />
                        <span className='text-sm text-gray-600 hover:text-black cursor-pointer transition-colors'>{category}</span>
                    </div>
                ))}
            </div>

            {/* Gender Filter */}
            <div className='mb-8'>
                <label className='block text-xs font-semibold uppercase tracking-wider text-gray-800 mb-4'>Gender</label>
                {genders.map((gender) => (
                    <div key={gender} className='flex items-center mb-2'>
                        <input 
                            type="radio" 
                            name="gender" 
                            value={gender} 
                            onChange={handleFilterChange} 
                            checked={filters.gender === gender}
                            className='mr-3 h-4 w-4 accent-black cursor-pointer'
                        />
                        <span className='text-sm text-gray-600 hover:text-black cursor-pointer transition-colors'>{gender}</span>
                    </div>
                ))}
            </div>

            {/* Color Filter */}
            <div className='mb-8'>
                <label className='block text-xs font-semibold uppercase tracking-wider text-gray-800 mb-4'>Color</label>
                <div className='flex flex-wrap gap-3'>
                    {colors.map((color) => (
                        <button 
                            key={color} 
                            type="button"
                            onClick={() => handleFilterChange({ target: { name: 'color', value: color, type: 'button' } })}
                            className={`w-7 h-7 rounded-full border border-gray-200 transition-all ${filters.color === color ? "ring-2 ring-black ring-offset-2" : "hover:scale-110"}`} 
                            style={{ backgroundColor: color.toLowerCase() }}
                            title={color}
                        ></button>
                    ))}
                </div>
            </div>

            {/* Size Filter */}
            <div className='mb-8'>
                <label className='block text-xs font-semibold uppercase tracking-wider text-gray-800 mb-4'>Size</label>
                <div className="grid grid-cols-2 gap-2">
                    {sizes.map((size) => (
                        <div key={size} className='flex items-center'>
                            <input 
                                type="checkbox" 
                                name="size" 
                                value={size} 
                                onChange={handleFilterChange} 
                                checked={filters.size.includes(size)}
                                className='mr-3 h-4 w-4 accent-black cursor-pointer rounded'
                            />
                            <span className='text-sm text-gray-600'>{size}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Price Range Filter */}
            <div className='mb-8'>
                <label className='block text-xs font-semibold uppercase tracking-wider text-gray-800 mb-4'>Price Range</label>
                <input 
                    type="range" 
                    name="priceRange" 
                    min={0} 
                    max={100} 
                    value={priceRange[1]}
                    onChange={handlePriceChange}
                    className='w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black'
                />
                <div className='flex justify-between text-xs font-medium text-gray-500 mt-3'>
                    <span>$0</span>
                    <span>${priceRange[1]}</span>
                </div>
            </div>
        </div>
    );
};

export default FilterSidebar;