import React from 'react'
import { Link } from 'react-router-dom'

const ProductManagement = () => {
    // Keeping mock data
    const products = [
        {
            _id: 123123,
            name: "Premium Cotton Shirt",
            price: 110,
            sku: "123123213",
        }
    ]

    const handleDelete = (id) => {
        if(window.confirm("Are you sure you want to delete the Product?")){
            console.log("Delete Product with id", id);
        }
    }

    return (
        <div className='max-w-7xl mx-auto p-6'>
            <h2 className='text-2xl md:text-3xl font-bold mb-8 uppercase tracking-tight text-gray-900'>
                Product Management
            </h2>
            
            <div className='overflow-x-auto bg-white border border-gray-100'>
                <table className='min-w-full text-left'>
                    <thead className='bg-gray-50 text-xs font-bold uppercase tracking-widest text-gray-600 border-b border-gray-100'>
                        <tr>
                            <th className='px-6 py-4'>Product Name</th>
                            <th className='px-6 py-4'>Price</th>
                            <th className='px-6 py-4'>SKU</th>
                            <th className='px-6 py-4 text-right'>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-50'>
                        {products.length > 0 ? (
                            products.map((product) => (
                                <tr key={product._id} className='hover:bg-gray-50 transition-colors'>
                                    <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap uppercase text-sm tracking-tight'>
                                        {product.name}
                                    </td>
                                    <td className='px-6 py-4 text-sm text-gray-600 font-medium'>
                                        ${product.price}
                                    </td>
                                    <td className='px-6 py-4 text-sm font-mono text-gray-500'>
                                        {product.sku}
                                    </td>
                                    <td className='px-6 py-4 text-right'>
                                        <div className='flex justify-end gap-4'>
                                            <Link 
                                                to={`/admin/products/${product._id}/edit`} 
                                                className='text-xs font-bold uppercase tracking-widest text-gray-900 border border-gray-200 px-3 py-1.5 hover:bg-black hover:text-white hover:border-black transition-all'
                                            >
                                                Edit
                                            </Link>
                                            <button 
                                                onClick={() => handleDelete(product._id)}
                                                className='text-xs font-bold uppercase tracking-widest text-red-500 border border-red-100 px-3 py-1.5 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all cursor-pointer'
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className='py-20 text-center text-gray-400 uppercase tracking-widest text-xs'>
                                    No products found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductManagement