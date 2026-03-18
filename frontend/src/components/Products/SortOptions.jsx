import { useSearchParams } from "react-router-dom";

const SortOptions = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSortChange = (e) => {
        const sortBy = e.target.value;
        const newParams = new URLSearchParams(searchParams);
        
        if (sortBy) {
            newParams.set("sort", sortBy);
        } else {
            newParams.delete("sort");
        }
        
        setSearchParams(newParams);
    };

    return (
        <div className="mb-6 flex items-center justify-end">
            <div className="relative">
                {/* Refinement: Added a subtle label or adjusted styling for a premium feel */}
                <select
                    id="sort"
                    onChange={handleSortChange}
                    value={searchParams.get("sort") || ""}
                    className="appearance-none bg-white border border-gray-300 text-gray-700 py-2 pl-4 pr-10 rounded-none text-sm focus:outline-none focus:border-black cursor-pointer transition-colors"
                >
                    <option value="">Sort By: Default</option>
                    <option value="priceAsc">Price: Low to High</option>
                    <option value="priceDesc">Price: High to Low</option>
                    <option value="popularity">Popularity</option>
                </select>
                
                {/* Refinement: Added a custom chevron icon for a more 'designed' look */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default SortOptions;