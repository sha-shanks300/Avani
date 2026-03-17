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
            <h3 className='text-xl font-medium text-gray-800 mb-4'>Filter</h3>

            {/* Category Filter */}
            <div className='mb-6'>
                <label className='block text-gray-600 font-medium mb-2'>Category</label>
                {categories.map((category) => (
                    <div key={category} className='flex items-center mb-1'>
                        <input 
                            type="radio" 
                            name="category" 
                            value={category} 
                            onChange={handleFilterChange} 
                            checked={filters.category === category}
                            className='mr-2 h-4 w-4 text-blue-500'
                        />
                        <span className='text-gray-700'>{category}</span>
                    </div>
                ))}
            </div>

            {/* Gender Filter */}
            <div className='mb-6'>
                <label className='block text-gray-600 font-medium mb-2'>Gender</label>
                {genders.map((gender) => (
                    <div key={gender} className='flex items-center mb-1'>
                        <input 
                            type="radio" 
                            name="gender" 
                            value={gender} 
                            onChange={handleFilterChange} 
                            checked={filters.gender === gender}
                            className='mr-2 h-4 w-4 text-blue-500'
                        />
                        <span className='text-gray-700'>{gender}</span>
                    </div>
                ))}
            </div>

            {/* Color Filter */}
            <div className='mb-6'>
                <label className='block text-gray-600 font-medium mb-2'>Color</label>
                <div className='flex flex-wrap gap-2'>
                    {colors.map((color) => (
                        <button 
                            key={color} 
                            type="button"
                            onClick={() => handleFilterChange({ target: { name: 'color', value: color, type: 'button' } })}
                            className={`w-8 h-8 rounded-full border border-gray-300 ${filters.color === color ? "ring-2 ring-blue-500" : ""}`} 
                            style={{ backgroundColor: color.toLowerCase() }}
                        ></button>
                    ))}
                </div>
            </div>

            {/* Size Filter */}
            <div className='mb-6'>
                <label className='block text-gray-600 font-medium mb-2'>Size</label>
                {sizes.map((size) => (
                    <div key={size} className='flex items-center mb-1'>
                        <input 
                            type="checkbox" 
                            name="size" 
                            value={size} 
                            onChange={handleFilterChange} 
                            checked={filters.size.includes(size)}
                            className='mr-2 h-4 w-4 text-blue-500'
                        />
                        <span className='text-gray-700'>{size}</span>
                    </div>
                ))}
            </div>

            {/* Material Filter - FIXED */}
            <div className='mb-6'>
                <label className='block text-gray-600 font-medium mb-2'>Material</label>
                {materials.map((material) => (
                    <div key={material} className='flex items-center mb-1'>
                        <input 
                            type="checkbox" 
                            name="material" 
                            value={material} 
                            onChange={handleFilterChange} 
                            checked={filters.material.includes(material)}
                            className='mr-2 h-4 w-4 text-blue-500'
                        />
                        <span className='text-gray-700'>{material}</span>
                    </div>
                ))}
            </div>

            {/* Brand Filter - FIXED */}
            <div className='mb-6'>
                <label className='block text-gray-600 font-medium mb-2'>Brand</label>
                {brands.map((brand) => (
                    <div key={brand} className='flex items-center mb-1'>
                        <input 
                            type="checkbox" 
                            name="brand" 
                            value={brand} 
                            onChange={handleFilterChange} 
                            checked={filters.brand.includes(brand)}
                            className='mr-2 h-4 w-4 text-blue-500'
                        />
                        <span className='text-gray-700'>{brand}</span>
                    </div>
                ))}
            </div>

            {/* Price Range Filter */}
            <div className='mb-8'>
                <label className='block text-gray-600 font-medium mb-2'>Price Range</label>
                <input 
                    type="range" 
                    name="priceRange" 
                    min={0} 
                    max={100} 
                    value={priceRange[1]}
                    onChange={handlePriceChange}
                    className='w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer'
                />
                <div className='flex justify-between text-gray-600 mt-2'>
                    <span>$0</span>
                    <span>${priceRange[1]}</span>
                </div>
            </div>
        </div>
    );
};

export default FilterSidebar;