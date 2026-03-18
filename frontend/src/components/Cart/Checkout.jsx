import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PayPalButton from "./PayPalButton";

const cart = {
  products: [
    { name: "Stylish Jacket", size: "M", color: "Black", price: 120, image: "https://picsum.photos/150?random=1" },
    { name: "Casual Sneakers", size: "42", color: "White", price: 75, image: "https://picsum.photos/150?random=2" },
  ],
  totalPrice: 195,
};

const Checkout = () => {
  const navigate = useNavigate();
  const [checkoutId, setCheckoutId] = useState(null);

  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateCheckout = (e) => {
    e.preventDefault(); 
    setCheckoutId(12345);
  };

  const handlePaymentSuccess = (details) => {
    console.log("Payment Successful:", details);
    navigate("/order-confirmation");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto py-12 px-6">
      {/* Left Side: Checkout Form */}
      <div>
        <h2 className="text-2xl font-bold mb-8 uppercase tracking-tight">Checkout</h2>
        
        <form onSubmit={handleCreateCheckout} className="space-y-8">
          {/* Contact Section */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-4">Contact Information</h3>
            <div className="mb-4">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">Email Address</label>
              <input
                type="email"
                className="w-full p-3 border border-gray-100 bg-gray-50 text-gray-500 cursor-not-allowed"
                value="shashaank@snu.edu.in"
                disabled
              />
            </div>
          </div>

          {/* Delivery Section */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-4">Delivery Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={shippingAddress.firstName}
                  onChange={handleInputChange}
                  className={`w-full p-3 border rounded-none transition-colors ${checkoutId ? 'bg-gray-50 border-gray-100 text-gray-400' : 'border-gray-200 focus:border-black'}`}
                  required
                  disabled={checkoutId}
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={shippingAddress.lastName}
                  onChange={handleInputChange}
                  className={`w-full p-3 border rounded-none transition-colors ${checkoutId ? 'bg-gray-50 border-gray-100 text-gray-400' : 'border-gray-200 focus:border-black'}`}
                  required
                  disabled={checkoutId}
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">Street Address</label>
              <input
                type="text"
                name="address"
                value={shippingAddress.address}
                onChange={handleInputChange}
                className={`w-full p-3 border rounded-none transition-colors ${checkoutId ? 'bg-gray-50 border-gray-100 text-gray-400' : 'border-gray-200 focus:border-black'}`}
                required
                disabled={checkoutId}
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  value={shippingAddress.city}
                  onChange={handleInputChange}
                  className={`w-full p-3 border rounded-none transition-colors ${checkoutId ? 'bg-gray-50 border-gray-100 text-gray-400' : 'border-gray-200 focus:border-black'}`}
                  required
                  disabled={checkoutId}
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">Postal Code</label>
                <input
                  type="text"
                  name="postalCode"
                  value={shippingAddress.postalCode}
                  onChange={handleInputChange}
                  className={`w-full p-3 border rounded-none transition-colors ${checkoutId ? 'bg-gray-50 border-gray-100 text-gray-400' : 'border-gray-200 focus:border-black'}`}
                  required
                  disabled={checkoutId}
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={shippingAddress.phone}
                onChange={handleInputChange}
                className={`w-full p-3 border rounded-none transition-colors ${checkoutId ? 'bg-gray-50 border-gray-100 text-gray-400' : 'border-gray-200 focus:border-black'}`}
                required
                disabled={checkoutId}
              />
            </div>
          </div>

          {/* Action Area */}
          <div className="pt-6 border-t border-gray-100">
            {!checkoutId ? (
              <button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-none font-bold uppercase tracking-widest hover:bg-gray-800 transition-all duration-300"
              >
                Continue to Payment
              </button>
            ) : (
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900">Pay with PayPal</h3>
                <PayPalButton 
                  amount={cart.totalPrice} 
                  onSuccess={handlePaymentSuccess} 
                  onError={(err) => alert("Payment failed. Try again.")}
                />
              </div>
            )}
          </div>
        </form>
      </div>

      {/* Right Side: Order Summary */}
      <div className="bg-gray-50 p-8 lg:p-10 sticky top-32 h-fit">
        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-8 pb-4 border-b border-gray-200">Order Summary</h3>
        
        {/* Product List */}
        <div className="space-y-6">
          {cart.products.map((product, index) => (
            <div key={index} className="flex items-start justify-between">
              <div className="flex items-center">
                <img src={product.image} alt={product.name} className="w-16 h-20 object-cover rounded-none border border-gray-100 mr-4" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight">{product.name}</h4>
                  <p className="text-xs text-gray-500 uppercase mt-1">Size: {product.size} | Color: {product.color}</p>
                </div>
              </div>
              <p className="text-sm font-bold text-gray-900">${product.price}</p>
            </div>
          ))}
        </div>

        {/* Pricing Breakdown */}
        <div className="mt-10 pt-6 border-t border-gray-200 space-y-3">
          <div className="flex justify-between text-xs uppercase tracking-widest text-gray-500">
            <span>Subtotal</span>
            <span className="text-gray-900 font-bold">${cart.totalPrice}</span>
          </div>
          <div className="flex justify-between text-xs uppercase tracking-widest text-gray-500">
            <span>Shipping</span>
            <span className="text-gray-900 font-bold tracking-normal">FREE</span>
          </div>
          <div className="flex justify-between items-center text-xl font-bold text-gray-900 pt-6 border-t border-gray-200 mt-6">
            <span className="uppercase tracking-tighter">Total</span>
            <span>${cart.totalPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;