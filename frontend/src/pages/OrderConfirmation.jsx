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
  const estimatedDelivery = useMemo(() => {
    const orderDate = new Date(checkout.createdAt);
    orderDate.setDate(orderDate.getDate() + 10);
    return orderDate.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }, [checkout.createdAt]);

  const calculateTotal = () => 
    checkout.checkoutItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 uppercase tracking-tighter">
        Thank You for Your Order!
      </h1>

      <div className="p-6 md:p-10 border border-gray-100">
        <div className="flex flex-col md:flex-row justify-between mb-10 border-b border-gray-50 pb-6">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">
              Order Number
            </h2>
            <p className="text-lg font-bold text-gray-900">#{checkout._id}</p>
            <p className="text-sm text-gray-400 mt-1">
              Placed on {checkout.createdAt.toLocaleDateString()}
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-900">Payment Verified</span>
          </div>
        </div>

        {/* Estimated Delivery Section */}
        <div className="mb-12">
          <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-3">Estimated Delivery</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Your items are being prepared and are expected to arrive by <br className="hidden md:block"/>
            <span className="font-bold text-black text-lg underline underline-offset-4 decoration-gray-200">{estimatedDelivery}</span>
          </p>
        </div>

        {/* Ordered Items */}
        <div className="space-y-8 mb-12">
          <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900 border-b border-gray-50 pb-2">Your Items</h3>
          {checkout.checkoutItems.map((item) => (
            <div key={item.productId} className="flex items-start justify-between">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-16 h-20 object-cover border border-gray-100 mr-6" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">{item.name}</h4>
                  <p className="text-xs text-gray-500 mt-1 uppercase tracking-tighter">
                    Size: {item.size} | Color: {item.color} | Qty: {item.quantity}
                  </p>
                </div>
              </div>
              <p className="text-sm font-bold text-gray-900">${item.price * item.quantity}</p>
            </div>
          ))}
        </div>

        {/* Footer Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-gray-100 pt-10">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-4">Shipping Address</h4>
            <div className="text-sm text-gray-600 leading-relaxed">
              <p>{checkout.shippingAddress.address}</p>
              <p>{checkout.shippingAddress.city}, {checkout.shippingAddress.country}</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between text-xs uppercase tracking-widest text-gray-500">
              <span>Subtotal</span>
              <span className="text-gray-900 font-bold">${calculateTotal()}</span>
            </div>
            <div className="flex justify-between text-xs uppercase tracking-widest text-gray-500">
              <span>Shipping</span>
              <span className="text-gray-900 font-bold tracking-normal">FREE</span>
            </div>
            <div className="flex justify-between items-center text-xl font-bold text-gray-900 pt-6 border-t border-gray-100">
              <span className="uppercase tracking-tighter">Total</span>
              <span>${calculateTotal()}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <button onClick={() => window.print()} className="text-xs font-bold uppercase tracking-widest underline underline-offset-8 hover:text-gray-500 transition-colors">
          Print Receipt
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;