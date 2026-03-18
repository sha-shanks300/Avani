import React, { useState } from 'react';

const OrderManagement = () => {
    // 1. Mock Data for orders
    const [orders, setOrders] = useState([
        {
            _id: "12312321",
            user: { name: "John Doe" },
            totalPrice: 110,
            status: "Processing",
        },
        {
            _id: "12312322",
            user: { name: "Jane Smith" },
            totalPrice: 245,
            status: "Shipped",
        },
    ]);

    // 2. Updated Handler
    const handleStatusChange = (orderId, newStatus) => {
        setOrders((prevOrders) =>
            prevOrders.map((order) =>
                order._id === orderId ? { ...order, status: newStatus } : order
            )
        );
    };

    return (
        <div className='max-w-7xl mx-auto p-6'>
            <h2 className='text-2xl font-bold mb-8 uppercase tracking-tight text-gray-900'>Order Management</h2>

            <div className='overflow-x-auto bg-white border border-gray-100'>
                <table className='min-w-full text-left'>
                    <thead className='bg-gray-50 text-xs font-bold uppercase tracking-widest text-gray-600 border-b border-gray-100'>
                        <tr>
                            <th className='py-4 px-6'>Order ID</th>
                            <th className='py-4 px-6'>Customer</th>
                            <th className='py-4 px-6'>Total Price</th>
                            <th className='py-4 px-6'>Status</th>
                            <th className='py-4 px-6'>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='text-sm text-gray-700 divide-y divide-gray-50'>
                        {orders.length > 0 ? (
                            orders.map((order) => (
                                <tr key={order._id} className='hover:bg-gray-50 transition-colors'>
                                    <td className='py-4 px-6 font-mono text-gray-600'>#{order._id}</td>
                                    <td className='py-4 px-6 font-medium text-gray-900'>{order.user.name}</td>
                                    <td className='py-4 px-6'>${order.totalPrice}</td>
                                    <td className='py-4 px-6'>
                                        <select 
                                            value={order.status}
                                            onChange={(e) => handleStatusChange(order._id, e.target.value)}
                                            className="appearance-none bg-gray-50 border border-gray-200 text-gray-700 py-1 pl-3 pr-8 rounded-none text-xs font-bold uppercase tracking-wider focus:outline-none focus:border-black cursor-pointer transition-colors"
                                            style={{
                                                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                                                backgroundRepeat: 'no-repeat',
                                                backgroundPosition: 'right 0.5rem center',
                                                backgroundSize: '1em',
                                            }}
                                        >
                                            <option value="Processing">Processing</option>
                                            <option value="Shipped">Shipped</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Cancelled">Cancelled</option>
                                        </select>
                                    </td>
                                    <td className='py-4 px-6'>
                                        {order.status !== 'Delivered' && (
                                            <button 
                                                onClick={() => handleStatusChange(order._id, 'Delivered')}
                                                className='text-xs font-bold uppercase tracking-widest text-white bg-black px-4 py-2 rounded-none hover:bg-gray-800 transition-all active:scale-95'
                                            >
                                                Mark as Delivered
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className='py-20 text-center text-gray-400 uppercase tracking-widest text-xs'>
                                    No orders found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderManagement;