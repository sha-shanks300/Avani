import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchProductDetails, updateProduct } from '../../redux/slices/productSlice';

const EditProductPage = () => {
    const dispatch= useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();
    const {selectedProduct, loading, error} = useSelector((state) => state.products);

    
    
    
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
        images: [],
    });

    const [uploading, setUploading] = useState(false);

    useEffect(()=>{
        if(id){
            dispatch(fetchProductDetails(id));
        }
    },[dispatch,id]);

    useEffect(()=>{
        if(selectedProduct){
            setProductData({
                ...selectedProduct,
                sizes: selectedProduct.sizes || [],
                colors: selectedProduct.colors || [],
                images: selectedProduct.images || [],
            });
        }
    },[selectedProduct]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        const formData= new FormData();
        formData.append("image", file);

        try {
            setUploading(true);
            const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/upload`,
                formData,
                {
                    headers: {"Content-Type": "multipart/form-data"},
                }
        );
        setProductData((prevData) => ({
            ...prevData,
            images: [...prevData.images, {url: data.imageUrl,altText: ""}],
        }));
        setUploading(false);
        } catch (error) {
            console.error(error);
            setUploading(false);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProduct({id, productData}));
        navigate("/admin/products");
    };
 
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error}</p>
 
    return (
        <div className='max-w-5xl mx-auto p-6 md:p-10'>
            <h2 className='text-2xl md:text-3xl font-bold mb-8 uppercase tracking-tight text-gray-900'>Edit Product</h2>
            
            <form onSubmit={handleSubmit} className='bg-white border border-gray-100 p-8 md:p-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6'>
                    
                    {/* Product Name */}
                    <div className='md:col-span-2'>
                        <label className='block text-xs font-bold uppercase tracking-widest text-gray-900 mb-2'>Product Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            value={productData.name} 
                            onChange={handleChange} 
                            className='w-full p-3 border border-gray-200 rounded-none focus:outline-none focus:border-black transition-colors' 
                            required 
                        />
                    </div>

                    {/* SKU */}
                    <div>
                        <label className='block text-xs font-bold uppercase tracking-widest text-gray-900 mb-2'>SKU</label>
                        <input 
                            type="text" 
                            name="sku" 
                            value={productData.sku} 
                            onChange={handleChange} 
                            className='w-full p-3 border border-gray-200 rounded-none focus:outline-none focus:border-black transition-colors' 
                        />
                    </div>

                    {/* Price */}
                    <div>
                        <label className='block text-xs font-bold uppercase tracking-widest text-gray-900 mb-2'>Price ($)</label>
                        <input 
                            type="number" 
                            name="price" 
                            value={productData.price} 
                            onChange={handleChange} 
                            className='w-full p-3 border border-gray-200 rounded-none focus:outline-none focus:border-black transition-colors' 
                        />
                    </div>

                    {/* Description */}
                    <div className='md:col-span-2'>
                        <label className='block text-xs font-bold uppercase tracking-widest text-gray-900 mb-2'>Description</label>
                        <textarea 
                            name="description" 
                            rows="4"
                            value={productData.description} 
                            onChange={handleChange} 
                            className='w-full p-3 border border-gray-200 rounded-none focus:outline-none focus:border-black transition-colors' 
                        />
                    </div>

                    {/* Stock */}
                    <div>
                        <label className='block text-xs font-bold uppercase tracking-widest text-gray-900 mb-2'>Stock Count</label>
                        <input 
                            type="number" 
                            name="countInStock" 
                            value={productData.countInStock} 
                            onChange={handleChange} 
                            className='w-full p-3 border border-gray-200 rounded-none focus:outline-none focus:border-black transition-colors' 
                        />
                    </div>

                    {/* Category (Placeholder for future select) */}
                    <div>
                        <label className='block text-xs font-bold uppercase tracking-widest text-gray-900 mb-2'>Category</label>
                        <input 
                            type="text" 
                            name="category" 
                            value={productData.category} 
                            onChange={handleChange} 
                            className='w-full p-3 border border-gray-200 rounded-none focus:outline-none focus:border-black transition-colors' 
                        />
                    </div>

                    {/* Sizes */}
                    <div>
                        <label className='block text-xs font-bold uppercase tracking-widest text-gray-900 mb-2'>Sizes (CSV)</label>
                        <input 
                            type="text" 
                            name="sizes" 
                            value={productData.sizes.join(", ")} 
                            onChange={(e) => setProductData({...productData, sizes: e.target.value.split(",").map(s => s.trim())})} 
                            className='w-full p-3 border border-gray-200 rounded-none focus:outline-none focus:border-black transition-colors' 
                        />
                    </div>

                    {/* Colors */}
                    <div>
                        <label className='block text-xs font-bold uppercase tracking-widest text-gray-900 mb-2'>Colors (CSV)</label>
                        <input 
                            type="text" 
                            name="colors" 
                            value={productData.colors.join(", ")} 
                            onChange={(e) => setProductData({...productData, colors: e.target.value.split(",").map(c => c.trim())})} 
                            className='w-full p-3 border border-gray-200 rounded-none focus:outline-none focus:border-black transition-colors' 
                        />
                    </div>
                </div>
                {/* Image Upload */}
                <div className='mt-8'>
                    <label className='block text-xs font-bold uppercase tracking-widest text-gray-900 mb-2'>Upload Image</label>
                    <input type="file" onChange={handleImageUpload} />
                    {uploading && <p className='mt-2 text-xs uppercase tracking-widest text-gray-500'>Uploading image...</p>}
                    <div className='flex gap-4 mt-4'>
                        {productData.images.map((image, index) => (
                            <img
                                key={index}
                                src={image.url}
                                alt={image.altText || "Product"}
                                className='w-20 h-20 object-cover border border-gray-200'
                            />
                        ))}
                    </div>
                </div>

                {/* Submit Button */}
                <div className='mt-12'>
                    <button 
                        type="submit" 
                        className='w-full bg-black text-white py-4 rounded-none font-bold uppercase tracking-widest hover:bg-gray-800 transition-all duration-300'
                    >
                        Update Product
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditProductPage;