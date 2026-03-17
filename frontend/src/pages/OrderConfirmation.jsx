import React, { useMemo } from "react";

// Sample data structure
const checkout = {
  _id: "12323",
  createdAt: new Date(), 
  checkoutItems: [
    {
      productId: "1",
      name: "Jacket",
      color: "black",
      size: "M",
      price: 150,
      quantity: 1,
      image: "https://picsum.photos/150?random=1",
    },
    {
      productId: "2",
      name: "T-shirt",
      color: "black",
      size: "M",
      price: 120,
      quantity: 2,
      image: "https://picsum.photos/150?random=2",
    },
  ],
  shippingAddress: {
    address: "123 Fashion Street",
    city: "New York",
    country: "USA",
  }
};

const OrderConfirmation = () => {
  // Efficiently calculate delivery date once per render/data change
  const estimatedDelivery = useMemo(() => {
    const orderDate = new Date(checkout.createdAt);
    orderDate.setDate(orderDate.getDate() + 10); // Add 10 days
    return orderDate.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }, [checkout.createdAt]);

  const calculateTotal = () => 
    checkout.checkoutItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white min-h-screen tracking-tighter">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
        Thank You for Your Order!
      </h1>

      <div className="p-8 border-2 border-dashed border-gray-200 rounded-2xl">
        <div className="flex justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Order ID: #{checkout._id}
            </h2>
            <p className="text-gray-500">Order Date: {checkout.createdAt.toLocaleDateString()}</p>
          </div>
          <div className="text-green-600 font-medium flex items-center">
            <span className="mr-2">●</span> Payment Verified
          </div>
        </div>

        {/* Estimated Delivery Section */}
        <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 font-bold">Estimated Delivery</h3>
          <p className="text-gray-600">Your order is expected to arrive by <span className="font-bold text-black">{estimatedDelivery}</span></p>
        </div>

        {/* Ordered Items */}
        <div className="space-y-6">
          {checkout.checkoutItems.map((item) => (
            <div key={item.productId} className="flex items-start justify-between border-b border-gray-100 pb-4">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-20 h-24 object-cover rounded-lg mr-4" />
                <div>
                  <h4 className="text-md font-semibold text-gray-800 uppercase">{item.name}</h4>
                  <p className="text-sm text-gray-500">Size: {item.size} | Color: {item.color}</p>
                </div>
              </div>
              <p className="font-medium text-gray-900">${item.price}</p>
            </div>
          ))}
        </div>

        {/* Totals Section */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-2 text-gray-800">Shipping Address</h4>
              <p className="text-gray-600">{checkout.shippingAddress.address}</p>
              <p className="text-gray-600">{checkout.shippingAddress.city}, {checkout.shippingAddress.country}</p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="text-gray-900 font-medium">${calculateTotal()}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="text-gray-900 font-bold">FREE</span>
              </div>
              <div className="flex justify-between items-center text-2xl font-bold text-gray-900 pt-4 border-t border-gray-100">
                <span>Total</span>
                <span>${calculateTotal()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;