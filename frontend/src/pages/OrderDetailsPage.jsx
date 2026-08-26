import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderDetails } from "../redux/slices/orderSlice";

const OrderDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { orderDetails, loading, error } = useSelector((state) => state.orders);

  useEffect(() => {
    if (id) {
      dispatch(fetchOrderDetails(id));
    }
  }, [dispatch, id]);

  if (loading) return <div className="p-10 text-center uppercase tracking-widest text-xs">Loading Order...</div>;
  if (error) return <div className="p-10 text-center uppercase tracking-widest text-xs">Error: {error}</div>;
  if (!orderDetails) return <div className="p-10 text-center uppercase tracking-widest text-xs">No order details found.</div>;

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 py-12">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 uppercase tracking-tight">Order Details</h1>

      <div className="bg-white border border-gray-100 p-6 md:p-10">
        {/* Header: ID, Date and Status */}
        <div className="flex flex-col sm:flex-row justify-between items-start mb-12 border-b border-gray-50 pb-8">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Order ID</h2>
            <p className="text-lg font-bold text-gray-900">#{orderDetails._id}</p>
            <p className="text-sm text-gray-400 mt-1">
              Placed on {new Date(orderDetails.createdAt).toLocaleDateString("en-GB")}
            </p>
          </div>
          
          <div className="flex flex-col sm:items-end gap-3 mt-4 sm:mt-0">
            <div className="flex items-center">
               <span className={`inline-block w-2 h-2 rounded-full mr-2 ${orderDetails.isPaid ? "bg-green-500" : "bg-red-500"}`}></span>
               <span className="text-xs font-bold uppercase tracking-widest text-gray-900">
                 {orderDetails.isPaid ? "Payment Approved" : "Payment Pending"}
               </span>
            </div>
            <div className="flex items-center">
               <span className={`inline-block w-2 h-2 rounded-full mr-2 ${orderDetails.isDelivered ? "bg-green-500" : "bg-yellow-500"}`}></span>
               <span className="text-xs font-bold uppercase tracking-widest text-gray-900">
                 {orderDetails.isDelivered ? "Delivered" : "Shipping Pending"}
               </span>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-4">Payment Info</h3>
            <p className="text-sm text-gray-600 mb-1">Method: <span className="text-gray-900">{orderDetails.paymentMethod}</span></p>
            <p className="text-sm text-gray-600">Status: <span className="text-gray-900">{orderDetails.isPaid ? "Verified" : "Unpaid"}</span></p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-4">Shipping Info</h3>
            <p className="text-sm text-gray-600 mb-1">Method: <span className="text-gray-900">Standard</span></p>
            <p className="text-sm text-gray-600">
              Address: <span className="text-gray-900">{orderDetails.shippingAddress?.address}, {orderDetails.shippingAddress?.city}, {orderDetails.shippingAddress?.country}</span>
            </p>
          </div>
        </div>

        {/* Products Table */}
        <div className="overflow-x-auto mb-12">
          <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-6 border-b border-gray-50 pb-2">Ordered Products</h3>
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-[10px] uppercase tracking-widest font-bold text-gray-600 border-b border-gray-100">
              <tr>
                <th className="py-4 px-4">Product</th>
                <th className="py-4 px-4 text-center">Unit Price</th>
                <th className="py-4 px-4 text-center">Quantity</th>
                <th className="py-4 px-4 text-right">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {(orderDetails.orderItems || []).map((item) => (
                <tr key={item.productId} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4 flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-16 object-cover border border-gray-100 mr-4"
                    />
                    <Link to={`/product/${item.productId}`} className="text-sm font-bold text-gray-900 uppercase tracking-tight hover:underline underline-offset-4">
                      {item.name}
                    </Link>
                  </td>
                  <td className="py-4 px-4 text-center text-sm font-medium text-gray-700">
                    ${Number(item.price || 0).toFixed(2)}
                  </td>
                  <td className="py-4 px-4 text-center text-sm text-gray-500">
                    {item.quantity}
                  </td>
                  <td className="py-4 px-4 text-right text-sm font-bold text-gray-900">
                    ${Number((item.price || 0) * (item.quantity || 0)).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pt-8 border-t border-gray-100">
          <Link to="/my-orders" className="text-xs font-bold uppercase tracking-widest text-gray-900 underline underline-offset-8 hover:text-gray-500 transition-colors">
            Back to My Orders
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsPage;