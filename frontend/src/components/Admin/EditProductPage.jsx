import React, { useState } from 'react';

const EditProductPage = () => {
    // 1. State variable to hold product data (non-visible fields remain here for logic)
    const [productData, setProductData] = useState({
        name: "",
        description: "",
        price: 0,
        countInStock: 0,
        sku: "",
        category: "", 
        brand: "",    
        sizes: [],
        colors: [],
        collections: "",
        material: "",
        gender: "",
        images: [
            { url: "https://picsum.photos/150?random=1" },
            { url: "https://picsum.photos/150?random=2" }
        ]
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Updated Product Data:", productData);
        alert("Product updated successfully!");
    };

    return (
        <div className='max-w-5xl mx-auto p-6 md:p-10 tracking-tighter'>
            <h2 className='text-3xl font-bold mb-8 text-gray-900'>Edit Product</h2>
            
            <form onSubmit={handleSubmit} className='bg-white border border-gray-200 rounded-xl p-6 shadow-sm'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {/* Name */}
                    <div className='mb-4'>
                        <label className='block text-sm font-semibold text-gray-700 mb-1'>Product Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            value={productData.name} 
                            onChange={handleChange} 
                            className='w-full p-2 border rounded border-gray-300 focus:ring-1 focus:ring-blue-500 outline-none' 
                            required 
                        />
                    </div>

                    {/* SKU */}
                    <div className='mb-4'>
                        <label className='block text-sm font-semibold text-gray-700 mb-1'>SKU</label>
                        <input 
                            type="text" 
                            name="sku" 
                            value={productData.sku} 
                            onChange={handleChange} 
                            className='w-full p-2 border rounded border-gray-300 focus:ring-1 focus:ring-blue-500 outline-none' 
                        />
                    </div>

                    {/* Description (Textarea) */}
                    <div className='md:col-span-2 mb-4'>
                        <label className='block text-sm font-semibold text-gray-700 mb-1'>Description</label>
                        <textarea 
                            name="description" 
                            rows="4"
                            value={productData.description} 
                            onChange={handleChange} 
                            className='w-full p-2 border rounded border-gray-300 focus:ring-1 focus:ring-blue-500 outline-none' 
                        />
                    </div>

                    {/* Price & Stock */}
                    <div className='mb-4'>
                        <label className='block text-sm font-semibold text-gray-700 mb-1'>Price ($)</label>
                        <input 
                            type="number" 
                            name="price" 
                            value={productData.price} 
                            onChange={handleChange} 
                            className='w-full p-2 border rounded border-gray-300 outline-none' 
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-sm font-semibold text-gray-700 mb-1'>Stock</label>
                        <input 
                            type="number" 
                            name="countInStock" 
                            value={productData.countInStock} 
                            onChange={handleChange} 
                            className='w-full p-2 border rounded border-gray-300 outline-none' 
                        />
                    </div>

                    {/* Sizes & Colors (Comma Separated Display) */}
                    <div className='mb-4'>
                        <label className='block text-sm font-semibold text-gray-700 mb-1'>Sizes (Comma Separated)</label>
                        <input 
                            type="text" 
                            name="sizes" 
                            value={productData.sizes.join(", ")} 
                            onChange={(e) => setProductData({...productData, sizes: e.target.value.split(",").map(s => s.trim())})} 
                            className='w-full p-2 border rounded border-gray-300 outline-none' 
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-sm font-semibold text-gray-700 mb-1'>Colors (Comma Separated)</label>
                        <input 
                            type="text" 
                            name="colors" 
                            value={productData.colors.join(", ")} 
                            onChange={(e) => setProductData({...productData, colors: e.target.value.split(",").map(c => c.trim())})} 
                            className='w-full p-2 border rounded border-gray-300 outline-none' 
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <div className='mt-8'>
                    <button 
                        type="submit" 
                        className='w-full bg-blue-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all shadow-md active:transform active:scale-95'
                    >
                        Update Product
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditProductPage;