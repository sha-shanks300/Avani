import { useSearchParams } from "react-router-dom";

const SortOptions = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    // Handle the change event from the select dropdown
    const handleSortChange = (e) => {
        const sortBy = e.target.value;
        
        // Create a new URLSearchParams object to preserve existing filters
        const newParams = new URLSearchParams(searchParams);
        
        if (sortBy) {
            newParams.set("sort", sortBy);
        } else {
            newParams.delete("sort"); // Remove the param if "Default" is selected
        }
        
        setSearchParams(newParams);
    };

    return (
        <div className="mb-4 flex items-center justify-end">
            <select
                id="sort"
                onChange={handleSortChange}
                // Sync the dropdown value with the URL for refresh retention
                value={searchParams.get("sort") || ""}
                className="border p-2 rounded-md focus:outline-none"
            >
                <option value="">Default</option>
                <option value="priceAsc">Price: Low to High</option>
                <option value="priceDesc">Price: High to Low</option>
                <option value="popularity">Popularity</option>
            </select>
        </div>
    );
};

export default SortOptions;