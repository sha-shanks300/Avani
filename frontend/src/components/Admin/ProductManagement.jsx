import React from 'react'
import { Link } from 'react-router-dom'

const ProductManagement = () => {
    // Keep the mock data as is
    const products = [
        {
            _id: 123123,
            name: "Shirt",
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
        <div className='max-w-7xl mx-auto p-4 md:p-8 tracking-tighter'>
            <h2 className='text-3xl font-bold mb-6'>Product Management</h2>
            
            <div className='overflow-x-auto bg-white shadow-sm border border-gray-200 rounded-xl'>
                <table className='min-w-full text-left text-gray-500'>
                    <thead className='bg-gray-50 text-xs uppercase text-gray-700 border-b border-gray-200'>
                        <tr>
                            <th className='px-6 py-4 font-bold'>Name</th>
                            <th className='px-6 py-4 font-bold'>Price</th>
                            <th className='px-6 py-4 font-bold'>SKU</th>
                            <th className='px-6 py-4 font-bold text-right'>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-100'>
                        {products.length > 0 ? (
                            products.map((product) => (
                                <tr key={product._id} className='hover:bg-gray-50 transition-colors'>
                                    <td className='px-6 py-4 font-semibold text-gray-900 whitespace-nowrap'>
                                        {product.name}
                                    </td>
                                    <td className='px-6 py-4 text-gray-600'>
                                        ${product.price}
                                    </td>
                                    <td className='px-6 py-4 text-gray-600 '>
                                        {product.sku}
                                    </td>
                                    <td className='px-6 py-4 text-right'>
                                        <div className='flex justify-end gap-2'>
                                            <Link 
                                                to={`/admin/products/${product._id}/edit`} 
                                                className='bg-yellow-100 text-yellow-700 px-3 py-1.5 rounded-lg text-sm font-bold hover:bg-yellow-500 hover:text-white transition-all border border-yellow-200'
                                            >
                                                Edit
                                            </Link>
                                            <button 
                                                onClick={() => handleDelete(product._id)}
                                                className='bg-red-50 text-red-600 px-3 py-1.5 rounded-lg text-sm font-bold hover:bg-red-600 hover:text-white transition-all border border-red-100'
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className='p-10 text-center text-gray-400 italic'>
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