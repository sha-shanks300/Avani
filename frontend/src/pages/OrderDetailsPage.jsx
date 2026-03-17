import React, { useState, useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";

const OrderDetailsPage = () => {
  const { id } = useParams(); //
  const [orderDetails, setOrderDetails] = useState(null);

  // Mock data setup following the structure
  useEffect(() => {
    const mockOrder = {
      _id: id || "67540ced3376121b361a0ed0", //
      createdAt: new Date("2024-12-07"),
      isPaid: true,
      isDelivered: false, // This controls the dynamic delivery badge
      paymentMethod: "PayPal",
      shippingMethod: "Standard",
      shippingAddress: { address: "123 Main St", city: "New York", country: "USA" },
      orderItems: [
        { productId: "1", name: "Slim-Fit Easy-Iron Shirt", price: 34.99, quantity: 1, image: "https://picsum.photos/150?random=1" },
        { productId: "2", name: "Classic Oxford Button-Down Shirt", price: 39.99, quantity: 1, image: "https://picsum.photos/150?random=2" },
        { productId: "3", name: "Chino Pants", price: 55, quantity: 1, image: "https://picsum.photos/150?random=3" },
      ],
    };
    setOrderDetails(mockOrder);
  }, [id]);

  // Efficiently calculate delivery date (10 days after creation)
  const estimatedDelivery = useMemo(() => {
    if (!orderDetails) return "";
    const orderDate = new Date(orderDetails.createdAt);
    orderDate.setDate(orderDate.getDate() + 10); //
    return orderDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }, [orderDetails]);

  if (!orderDetails) return <div className="p-10 text-center">Loading Order...</div>;

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 tracking-tighter ">
      <h1 className="text-2xl font-bold mb-6">Order Details</h1>

      {/* Main Container: Explicitly set border-gray-200 */}
      <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm">
        {/* Header: ID, Date and Dynamic Status Badges */}
        <div className="flex flex-col sm:flex-row justify-between items-start mb-8 gap-4 ">
          <div>
            <h2 className="text-lg font-bold">Order ID: #{orderDetails._id}</h2>
            <p className="text-gray-500 text-sm">
              {new Date(orderDetails.createdAt).toLocaleDateString("en-GB")}
            </p>
          </div>
          
          {/* DYNAMIC BADGES SECTION */}
          <div className="flex flex-col items-end gap-2">
            {/* Payment Status Badge */}
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              orderDetails.isPaid ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}>
              {orderDetails.isPaid ? "Approved" : "Payment Pending"}
            </span>

            {/* Delivery Status Badge - Linked to isDelivered */}
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              orderDetails.isDelivered ? "bg-blue-100 text-blue-700" : "bg-yellow-100 text-yellow-700"
            }`}>
              {orderDetails.isDelivered ? "Delivered" : "Pending Delivery"}
            </span>
          </div>
        </div>

        {/* Info Grid: Payment and Shipping */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10 text-sm">
          <div>
            <h3 className="font-bold text-md mb-2">Payment Info</h3>
            <p className="text-gray-700">Payment Method: {orderDetails.paymentMethod}</p>
            <p className="text-gray-700">Status: {orderDetails.isPaid ? "Paid" : "Unpaid"}</p>
          </div>
          <div>
            <h3 className="font-bold text-md mb-2">Shipping Info</h3>
            <p className="text-gray-700">Shipping Method: {orderDetails.shippingMethod}</p>
            <p className="text-gray-700">
              Address: {orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.country}
            </p>
          </div>
        </div>

        {/* Products Table */}
        <div className="overflow-x-auto">
          <h3 className="font-bold text-md mb-4">Products</h3>
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-100 text-gray-700 uppercase text-xs font-bold">
              <tr>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4 text-center">Unit Price</th>
                <th className="py-3 px-4 text-center">Quantity</th>
                <th className="py-3 px-4 text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {orderDetails.orderItems.map((item) => (
                // Order Item Row: border-b border-gray-100 adds the separator
                <tr key={item.productId} className="border-b border-gray-200 last:border-0 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4 flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded mr-4"
                    />
                    <Link to={`/product/${item.productId}`} className="text-blue-600 hover:underline text-sm font-medium">
                      {item.name}
                    </Link>
                  </td>
                  <td className="py-4 px-4 text-center text-sm font-medium text-gray-800">
                    ${item.price.toFixed(2)}
                  </td>
                  <td className="py-4 px-4 text-center text-sm text-gray-800">
                    {item.quantity}
                  </td>
                  <td className="py-4 px-4 text-right text-sm font-bold text-gray-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer: Back Navigation: border-gray-200 */}
        <div className="mt-8 border-t border-gray-200 pt-4">
          <Link to="/my-orders" className="text-blue-600 text-sm hover:underline">
            Back to My Orders
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsPage;