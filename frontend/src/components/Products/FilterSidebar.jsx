import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

// Cheapest item in the catalogue is ₹120, so the slider starts at ₹100
// rather than wasting its first fifth on prices nothing sells for.
const MIN_PRICE = 100;
const MAX_PRICE = 500;
const PRICE_STEP = 10;

const CATEGORIES = ["Perfumes", "NFC Keychains", "Posters"];

// Each category exposes a different set of facets. `param` is the query key the
// backend already understands, so nothing here needs an API change.
const FACETS = {
    "Perfumes": [
        { param: "brand", label: "House", multi: true, options: ["Chanel", "Dior", "Yves Saint Laurent", "Gucci", "Kayali", "Marc Jacobs", "Victoria's Secret", "Lattafa"] },
        { param: "collection", label: "Scent Family", multi: false, options: ["Floral", "Gourmand", "Oud"] },
        { param: "material", label: "Concentration", multi: true, options: ["Eau de Parfum", "Eau de Toilette"] },
        { param: "gender", label: "Wear", multi: false, options: ["Women", "Unisex"] },
    ],
    "NFC Keychains": [
        { param: "brand", label: "Artist", multi: true, options: ["21 Savage", "A$AP Rocky", "Childish Gambino", "Clipse", "Don Toliver", "Drake", "Eminem", "Frank Ocean", "Future", "Kanye West", "Ken Carson", "Kendrick Lamar", "Madvillain", "Metro Boomin", "Michael Jackson", "PARTYNEXTDOOR", "Playboi Carti", "SZA", "The Weeknd", "Tory Lanez", "Travis Scott", "Tyler, The Creator", "Various Artists"] },
        { param: "collection", label: "Genre", multi: false, options: ["Hip-Hop", "R&B", "Pop"] },
        { param: "color", label: "Finish", multi: false, options: ["Black", "Silver", "Gold"] },
    ],
    "Posters": [
        { param: "brand", label: "Artist", multi: true, options: ["A.R. Rahman", "Anirudh Ravichander", "Don Toliver", "Frank Ocean", "Future", "Kanye West", "Kendrick Lamar", "Kid Cudi", "Metro Boomin", "MF DOOM", "Playboi Carti", "Santhosh Narayanan", "The Weeknd", "Travis Scott", "Tupac"] },
        { param: "collection", label: "Genre", multi: false, options: ["Hip-Hop", "R&B", "Indian Cinema"] },
        { param: "size", label: "Size", multi: true, options: ["A4", "A3", "A2"] },
        { param: "material", label: "Finish", multi: true, options: ["Matte Paper", "Glossy", "Canvas"] },
    ],
};

const MULTI_PARAMS = ["brand", "material", "size"];

const FilterSidebar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [filters, setFilters] = useState({});
    const [priceRange, setPriceRange] = useState([MIN_PRICE, MAX_PRICE]);

    const activeCategory = filters.category || "";
    const facets = FACETS[activeCategory] || [];

    useEffect(() => {
        const params = Object.fromEntries([...searchParams]);
        const next = { ...params };
        MULTI_PARAMS.forEach((key) => {
            next[key] = params[key] ? params[key].split("|") : [];
        });
        setFilters(next);
        setPriceRange([MIN_PRICE, Number(params.maxPrice) || MAX_PRICE]);
    }, [searchParams]);

    const updateURLParams = (newFilters) => {
        const params = new URLSearchParams();
        Object.keys(newFilters).forEach((key) => {
            const value = newFilters[key];
            if (Array.isArray(value) && value.length > 0) {
                params.set(key, value.join("|"));
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
            maxPrice: filters.maxPrice,
        };
        setFilters(next);
        updateURLParams(next);
    };

    const handlePriceChange = (e) => {
        const newMaxPrice = e.target.value;
        setPriceRange([MIN_PRICE, newMaxPrice]);
        // At the top of the range there's no limit, so drop it from the URL.
        const newFilters = { ...filters, maxPrice: Number(newMaxPrice) >= MAX_PRICE ? "" : newMaxPrice };
        delete newFilters.minPrice;
        setFilters(newFilters);
        updateURLParams(newFilters);
    };

    const clearAll = () => {
        setFilters({});
        setPriceRange([MIN_PRICE, MAX_PRICE]);
        setSearchParams(new URLSearchParams());
    };

    const hasActiveFilters = Object.keys(filters).some((key) => {
        const value = filters[key];
        return Array.isArray(value) ? value.length > 0 : Boolean(value);
    });

    return (
        <div>
            {/* h-10 matches the page title row so both headings share a centre line */}
            <div className='flex items-center justify-between h-10 mb-8'>
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
                    min={MIN_PRICE}
                    max={MAX_PRICE}
                    step={PRICE_STEP}
                    aria-label="Maximum price"
                    value={priceRange[1]}
                    onChange={handlePriceChange}
                    className='w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black'
                />
                <div className='flex justify-between text-xs font-medium text-gray-500 mt-3'>
                    <span>₹{MIN_PRICE}</span>
                    <span>{Number(priceRange[1]) >= MAX_PRICE ? "Any price" : `Up to ₹${priceRange[1]}`}</span>
                </div>
            </div>
        </div>
    );
};

export default FilterSidebar;
