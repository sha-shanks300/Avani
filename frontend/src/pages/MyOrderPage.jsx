import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const MyOrderPage = () => {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Mock data fetch
        setTimeout(() => {
            const mockOrders = [
                {
                    _id: "12345",
                    createdAt: new Date(),
                    shippingAddress: { city: "New York", country: "USA" },
                    orderItems: [{ name: "Product 1", image: "https://picsum.photos/500/500?random=1" }],
                    totalPrice: 100,
                    isPaid: true,
                    status: "Delivered"
                },
                {
                    _id: "3456",
                    createdAt: new Date(),
                    shippingAddress: { city: "New York", country: "USA" },
                    orderItems: [{ name: "Product 2", image: "https://picsum.photos/500/500?random=2" }],
                    totalPrice: 100,
                    isPaid: true,
                    status: "Processing"
                },
            ];
            setOrders(mockOrders);
        }, 500);
    }, []);

    const handleRowClick = (orderId) => {
        navigate(`/order/${orderId}`)
    };

    return (
        <div className='max-w-7xl mx-auto p-4 sm:p-6 py-12'>
            <h2 className='text-2xl font-bold mb-8 uppercase tracking-tight text-gray-900'>
                My Orders
            </h2>
            <div className='overflow-x-auto border border-gray-100'>
                <table className='min-w-full text-left'>
                    <thead className='bg-gray-50 text-[10px] sm:text-xs uppercase tracking-widest font-bold text-gray-600 border-b border-gray-100'>
                        <tr>
                            <th className='py-4 px-4'>Image</th>
                            <th className='py-4 px-4'>Order ID</th>
                            <th className='py-4 px-4'>Date</th>
                            <th className='py-4 px-4'>Shipping</th>
                            <th className='py-4 px-4'>Items</th>
                            <th className='py-4 px-4'>Price</th>
                            <th className='py-4 px-4'>Status</th>
                        </tr>
                    </thead>
                    <tbody className='text-sm text-gray-700 divide-y divide-gray-50'>
                        {orders.length > 0 ? (
                            orders.map((order) => (
                                <tr 
                                    key={order._id} 
                                    onClick={() => handleRowClick(order._id)} 
                                    className='hover:bg-gray-50 cursor-pointer transition-colors'
                                >
                                    <td className='py-4 px-4'>
                                        <img 
                                            src={order.orderItems[0].image} 
                                            alt={order.orderItems[0].name} 
                                            className='w-12 h-12 object-cover rounded-none border border-gray-100'
                                        />
                                    </td>
                                    <td className='py-4 px-4 font-semibold text-gray-900'>
                                        #{order._id}
                                    </td>
                                    <td className='py-4 px-4 text-gray-500'>
                                        {new Date(order.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className='py-4 px-4 text-gray-500'>
                                        {order.shippingAddress ? order.shippingAddress.country : "N/A"}
                                    </td>
                                    <td className='py-4 px-4'>
                                        {order.orderItems.length}
                                    </td>
                                    <td className='py-4 px-4 font-medium'>
                                        ${order.totalPrice}
                                    </td>
                                    <td className='py-4 px-4'>
                                        <span className={`inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-none ${order.isPaid ? "bg-gray-100 text-gray-800" : "bg-red-50 text-red-700"}`}>
                                            {order.isPaid ? "Paid" : "Pending"}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={7} className='py-20 text-center text-gray-400 uppercase tracking-widest text-xs'>
                                    You have no orders.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyOrderPage