import React from 'react'
import { Link } from 'react-router-dom'

const AdminHomePage = () => {
    const orders = [
        {
            _id: 123123,
            user: { name: "John Doe" },
            totalPrice: 110,
            status: "Processing",
        },
        {
            _id: 123123,
            user: { name: "John Doe" },
            totalPrice: 110,
            status: "Processing",
        },
        {
            _id: 123123,
            user: { name: "John Doe" },
            totalPrice: 110,
            status: "Processing",
        },
        {
            _id: 123123,
            user: { name: "John Doe" },
            totalPrice: 110,
            status: "Processing",
        },
        {
            _id: 123123,
            user: { name: "John Doe" },
            totalPrice: 110,
            status: "Processing",
        },
    ];

    return (
        <div className='max-w-7xl mx-auto p-6 tracking-tighter'>
            <h1 className='text-3xl font-bold mb-6'>Admin Dashboard</h1>
            
            {/* Stats Overview Section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
                <div className='p-4 shadow-md rounded-lg border border-gray-100'>
                    <h2 className='text-xl font-semibold'>Revenue</h2>
                    <p className='text-2xl font-bold'>$10000</p>
                </div>
                <div className='p-4 shadow-md rounded-lg border border-gray-100'>
                    <h2 className='text-xl font-semibold'>Total Orders</h2>
                    <p className='text-2xl font-bold'>200</p>
                    <Link to="/admin/orders" className='text-blue-500 hover:underline text-sm'>
                        Manage Orders
                    </Link>
                </div>
                <div className='p-4 shadow-md rounded-lg border border-gray-100'>
                    <h2 className='text-xl font-semibold'>Total Products</h2>
                    <p className='text-2xl font-bold'>100</p>
                    <Link to="/admin/products" className='text-blue-500 hover:underline text-sm'>
                        Manage Products
                    </Link>
                </div>
            </div>

            {/* Recent Orders Table Section */}
            <div className='mt-6'>
                <h2 className='text-2xl font-bold mb-4'>Recent Orders</h2>
                <div className='overflow-x-auto bg-white border border-gray-200 rounded-lg'>
                    <table className='min-w-full text-left'>
                        <thead className='bg-gray-100 text-gray-700 uppercase text-xs font-bold'>
                            <tr>
                                <th className='py-3 px-4'>Order ID</th>
                                <th className='py-3 px-4'>User</th>
                                <th className='py-3 px-4'>Total Price</th>
                                <th className='py-3 px-4'>Status</th>
                            </tr>
                        </thead>
                        <tbody className='text-sm text-gray-700'>
                            {orders.length > 0 ? (
                                orders.map((order, index) => (
                                    <tr key={index} className='border-b border-gray-100 hover:bg-gray-50 transition-colors'>
                                        <td className='py-4 px-4 font-medium'>#{order._id}</td>
                                        <td className='py-4 px-4'>{order.user.name}</td>
                                        <td className='py-4 px-4'>${order.totalPrice}</td>
                                        <td className='py-4 px-4'>
                                            <span className='bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium'>
                                                {order.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className='p-10 text-center text-gray-500 italic'>
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