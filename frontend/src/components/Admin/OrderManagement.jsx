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
    ]);

    // 2. Updated Handler to handle any status change
    const handleStatusChange = (orderId, newStatus) => {
        console.log(`Updating order ${orderId} to ${newStatus}`);
        setOrders((prevOrders) =>
            prevOrders.map((order) =>
                order._id === orderId ? { ...order, status: newStatus } : order
            )
        );
    };

    return (
        <div className='max-w-7xl mx-auto p-6 tracking-tighter'>
            <h2 className='text-2xl font-bold mb-6'>Order Management</h2>

            <div className='overflow-x-auto bg-white shadow-md rounded-lg border border-gray-200'>
                <table className='min-w-full text-left'>
                    <thead className='bg-gray-100 text-gray-700 uppercase text-xs font-bold'>
                        <tr>
                            <th className='py-3 px-4'>Order ID</th>
                            <th className='py-3 px-4'>Customer</th>
                            <th className='py-3 px-4'>Total Price</th>
                            <th className='py-3 px-4'>Status</th>
                            <th className='py-3 px-4'>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='text-sm text-gray-700'>
                        {orders.length > 0 ? (
                            orders.map((order) => (
                                <tr key={order._id} className='border-b border-gray-100 hover:bg-gray-50 transition-colors'>
                                    <td className='py-4 px-4 font-medium'>#{order._id}</td>
                                    <td className='py-4 px-4'>{order.user.name}</td>
                                    <td className='py-4 px-4'>${order.totalPrice}</td>
                                    <td className='py-4 px-4'>
                                        {/* Status Dropdown replaces the static span */}
                                        <select 
                                            value={order.status}
                                            onChange={(e) => handleStatusChange(order._id, e.target.value)}
                                            className={`p-2 border rounded-lg outline-none transition-all ${
                                                order.status === 'Processing' ? 'bg-blue-50 text-blue-700 border-blue-200' : 
                                                order.status === 'Shipped' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                                                order.status === 'Delivered' ? 'bg-green-50 text-green-700 border-green-200' :
                                                'bg-gray-50 text-gray-700 border-gray-200'
                                            }`}
                                        >
                                            <option value="Processing">Processing</option>
                                            <option value="Shipped">Shipped</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Cancelled">Cancelled</option>
                                        </select>
                                    </td>
                                    <td className='py-4 px-4'>
                                        {order.status !== 'Delivered' && (
                                            <button 
                                                onClick={() => handleStatusChange(order._id, 'Delivered')}
                                                className='bg-green-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-600 transition-colors shadow-sm active:scale-95'
                                            >
                                                Mark as Delivered
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className='p-10 text-center text-gray-500 italic'>
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