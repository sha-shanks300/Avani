import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const MAX_PRICE = 500;

const CATEGORIES = ["Perfumes", "NFC Keychains", "Posters"];

// Each category exposes a different set of facets. `param` is the query key the
// backend already understands, so nothing here needs an API change.
const FACETS = {
    "Perfumes": [
        { param: "brand", label: "House", multi: true, options: ["Chanel", "Dior", "Yves Saint Laurent", "Gucci", "Burberry", "Kayali", "Marc Jacobs", "Victoria's Secret", "Lattafa"] },
        { param: "collection", label: "Scent Family", multi: false, options: ["Floral", "Gourmand", "Oud"] },
        { param: "material", label: "Concentration", multi: true, options: ["Eau de Parfum", "Eau de Toilette"] },
        { param: "gender", label: "Wear", multi: false, options: ["Women", "Unisex"] },
    ],
    "NFC Keychains": [
        { param: "brand", label: "Artist", multi: true, options: ["21 Savage", "A$AP Rocky", "A.R. Rahman", "Anirudh Ravichander", "Ankur Tiwari", "Billie Eilish", "Childish Gambino", "Don Toliver", "Drake", "Eminem", "Frank Ocean", "Future", "Joji", "Kanye West", "Ken Carson", "Kendrick Lamar", "Lana Del Rey", "Metro Boomin", "Michael Jackson", "Olivia Rodrigo", "PARTYNEXTDOOR", "Playboi Carti", "Pusha T", "SZA", "Sabrina Carpenter", "Shashwat Sachdev", "Taylor Swift", "The Weeknd", "Tory Lanez", "Travis Scott"] },
        { param: "collection", label: "Genre", multi: false, options: ["Hip-Hop", "R&B", "Pop", "Alternative", "Indian Cinema"] },
        { param: "color", label: "Finish", multi: false, options: ["Black", "Silver", "Gold"] },
    ],
    "Posters": [
        { param: "collection", label: "Theme", multi: false, options: ["Album Art", "Anime", "Abstract", "Typography", "Retro", "Film"] },
        { param: "size", label: "Size", multi: true, options: ["A4", "A3", "A2"] },
        { param: "material", label: "Finish", multi: true, options: ["Matte Paper", "Glossy", "Canvas"] },
    ],
};

const MULTI_PARAMS = ["brand", "material", "size"];

const FilterSidebar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [filters, setFilters] = useState({});
    const [priceRange, setPriceRange] = useState([0, MAX_PRICE]);

    const activeCategory = filters.category || "";
    const facets = FACETS[activeCategory] || [];

    useEffect(() => {
        const params = Object.fromEntries([...searchParams]);
        const next = { ...params };
        MULTI_PARAMS.forEach((key) => {
            next[key] = params[key] ? params[key].split(",") : [];
        });
        setFilters(next);
        setPriceRange([0, Number(params.maxPrice) || MAX_PRICE]);
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

    const setValue = (param, value, multi) => {
        let newFilters = { ...filters };
        if (multi) {
            const current = [...(newFilters[param] || [])];
            const index = current.indexOf(value);
            if (index > -1) current.splice(index, 1);
            else current.push(value);
            newFilters[param] = current;
        } else {
            // Clicking the selected option again clears it.
            newFilters[param] = newFilters[param] === value ? "" : value;
        }
        setFilters(newFilters);
        updateURLParams(newFilters);
    };

    // Switching category drops facets that don't exist on the new one, otherwise
    // a stale ?brand=Kanye West would silently empty the perfume grid.
    const handleCategoryChange = (category) => {
        const next = {
            category: filters.category === category ? "" : category,
            minPrice: filters.minPrice,
            maxPrice: filters.maxPrice,
        };
        setFilters(next);
        updateURLParams(next);
    };

    const handlePriceChange = (e) => {
        const newMaxPrice = e.target.value;
        setPriceRange([0, newMaxPrice]);
        const newFilters = { ...filters, minPrice: 0, maxPrice: newMaxPrice };
        setFilters(newFilters);
        updateURLParams(newFilters);
    };

    const clearAll = () => {
        setFilters({});
        setPriceRange([0, MAX_PRICE]);
        setSearchParams(new URLSearchParams());
    };

    const hasActiveFilters = Object.keys(filters).some((key) => {
        const value = filters[key];
        return Array.isArray(value) ? value.length > 0 : Boolean(value);
    });

    return (
        <div className='p-4'>
            <div className='flex items-center justify-between mb-8'>
                <h3 className='text-sm font-bold text-gray-900 uppercase tracking-widest'>Filters</h3>
                {hasActiveFilters && (
                    <button
                        onClick={clearAll}
                        className='text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors cursor-pointer'
                    >
                        Clear
                    </button>
                )}
            </div>

            {/* Category — always shown, and it drives everything below it */}
            <div className='mb-8'>
                <label className='block text-xs font-semibold uppercase tracking-wider text-gray-800 mb-4'>Category</label>
                {CATEGORIES.map((category) => (
                    <div key={category} className='flex items-center mb-2'>
                        <input
                            type="radio"
                            name="category"
                            value={category}
                            onChange={() => handleCategoryChange(category)}
                            onClick={() => handleCategoryChange(category)}
                            checked={filters.category === category}
                            className='mr-3 h-4 w-4 accent-black cursor-pointer'
                        />
                        <span className='text-sm text-gray-600 hover:text-black cursor-pointer transition-colors'>{category}</span>
                    </div>
                ))}
            </div>

            {/* Facets for the selected category */}
            {facets.map((facet) => (
                <div key={facet.param} className='mb-8'>
                    <label className='block text-xs font-semibold uppercase tracking-wider text-gray-800 mb-4'>
                        {facet.label}
                    </label>
                    <div className={facet.options.length > 12 ? "max-h-56 overflow-y-auto pr-2" : ""}>
                        {facet.options.map((option) => {
                            const selected = facet.multi
                                ? (filters[facet.param] || []).includes(option)
                                : filters[facet.param] === option;
                            return (
                                <div key={option} className='flex items-center mb-2'>
                                    <input
                                        type={facet.multi ? "checkbox" : "radio"}
                                        name={facet.param}
                                        value={option}
                                        onChange={() => setValue(facet.param, option, facet.multi)}
                                        onClick={() => !facet.multi && setValue(facet.param, option, false)}
                                        checked={selected}
                                        className='mr-3 h-4 w-4 accent-black cursor-pointer'
                                    />
                                    <span className='text-sm text-gray-600'>{option}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}

            {!activeCategory && (
                <p className='mb-8 text-xs text-gray-400 leading-relaxed'>
                    Pick a category to filter by artist, scent family, finish and more.
                </p>
            )}

            {/* Price Range */}
            <div className='mb-8'>
                <label className='block text-xs font-semibold uppercase tracking-wider text-gray-800 mb-4'>Price Range</label>
                <input
                    type="range"
                    name="priceRange"
                    min={0}
                    max={MAX_PRICE}
                    value={priceRange[1]}
                    onChange={handlePriceChange}
                    className='w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black'
                />
                <div className='flex justify-between text-xs font-medium text-gray-500 mt-3'>
                    <span>₹0</span>
                    <span>₹{priceRange[1]}</span>
                </div>
            </div>
        </div>
    );
};

export default FilterSidebar;
