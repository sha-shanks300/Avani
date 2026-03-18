import React from 'react'
import { Link } from 'react-router-dom'

const AdminHomePage = () => {
    // Mock data (Keeping your structure)
    const orders = [
        { _id: "123123", user: { name: "John Doe" }, totalPrice: 110, status: "Processing" },
        { _id: "123124", user: { name: "Jane Smith" }, totalPrice: 250, status: "Processing" },
        { _id: "123125", user: { name: "Alice Brown" }, totalPrice: 85, status: "Processing" },
    ];

    return (
        <div className='max-w-7xl mx-auto p-6 md:p-8'>
            <h1 className='text-2xl font-bold mb-8 text-gray-900 uppercase tracking-tight'>Admin Dashboard</h1>
            
            {/* Stats Overview Section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
                {/* Revenue Card */}
                <div className='p-6 bg-white border border-gray-200'>
                    <h2 className='text-xs font-bold uppercase tracking-widest text-gray-500 mb-2'>Revenue</h2>
                    <p className='text-3xl font-bold text-gray-900'>$10,000</p>
                </div>

                {/* Orders Card */}
                <div className='p-6 bg-white border border-gray-200'>
                    <h2 className='text-xs font-bold uppercase tracking-widest text-gray-500 mb-2'>Total Orders</h2>
                    <p className='text-3xl font-bold text-gray-900 mb-4'>200</p>
                    <Link to="/admin/orders" className='text-xs font-semibold uppercase tracking-wider text-black underline underline-offset-4 hover:text-gray-600 transition-colors'>
                        Manage Orders
                    </Link>
                </div>

                {/* Products Card */}
                <div className='p-6 bg-white border border-gray-200'>
                    <h2 className='text-xs font-bold uppercase tracking-widest text-gray-500 mb-2'>Total Products</h2>
                    <p className='text-3xl font-bold text-gray-900 mb-4'>100</p>
                    <Link to="/admin/products" className='text-xs font-semibold uppercase tracking-wider text-black underline underline-offset-4 hover:text-gray-600 transition-colors'>
                        Manage Products
                    </Link>
                </div>
            </div>

            {/* Recent Orders Table Section */}
            <div className='mt-12'>
                <h2 className='text-xl font-bold mb-6 text-gray-900'>Recent Orders</h2>
                <div className='overflow-x-auto border border-gray-200 bg-white'>
                    <table className='min-w-full divide-y divide-gray-200'>
                        <thead className='bg-gray-50'>
                            <tr>
                                <th className='py-4 px-6 text-left text-xs font-bold uppercase tracking-widest text-gray-600'>Order ID</th>
                                <th className='py-4 px-6 text-left text-xs font-bold uppercase tracking-widest text-gray-600'>User</th>
                                <th className='py-4 px-6 text-left text-xs font-bold uppercase tracking-widest text-gray-600'>Total Price</th>
                                <th className='py-4 px-6 text-left text-xs font-bold uppercase tracking-widest text-gray-600'>Status</th>
                            </tr>
                        </thead>
                        <tbody className='divide-y divide-gray-100'>
                            {orders.length > 0 ? (
                                orders.map((order, index) => (
                                    <tr key={index} className='hover:bg-gray-50 transition-colors'>
                                        <td className='py-4 px-6 text-sm font-mono text-gray-600'>#{order._id}</td>
                                        <td className='py-4 px-6 text-sm font-medium text-gray-900'>{order.user.name}</td>
                                        <td className='py-4 px-6 text-sm text-gray-700'>${order.totalPrice}</td>
                                        <td className='py-4 px-6'>
                                            <span className='inline-flex items-center bg-gray-100 text-gray-800 px-3 py-1 text-xs font-bold uppercase tracking-tighter'>
                                                {order.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className='py-20 text-center text-sm text-gray-400 uppercase tracking-widest'>
                                        No recent orders found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdminHomePage;