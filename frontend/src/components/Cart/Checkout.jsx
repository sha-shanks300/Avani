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
  
  // State to track the unique checkout session ID
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
    setShippingAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCreateCheckout = (e) => {
    e.preventDefault(); 
    setCheckoutId(12345);
  };

  // Logic to handle successful payment and navigation
  const handlePaymentSuccess = (details) => {
    console.log("Payment Successful:", details);
    navigate("/order-confirmation");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
      {/* Left Side: Checkout Form */}
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">Checkout</h2>
        
        <form onSubmit={handleCreateCheckout}>
          <h3 className="text-lg mb-4">Contact Information</h3>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-1">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-50"
              value="shashaank@snu.edu.in"
              disabled
            />
          </div>

          <h3 className="text-lg mb-4 mt-8">Delivery Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 text-sm mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                value={shippingAddress.firstName}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
                disabled={checkoutId} // Prevent editing after checkout is created
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={shippingAddress.lastName}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
                disabled={checkoutId}
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-gray-700 text-sm mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={shippingAddress.address}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              disabled={checkoutId}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-gray-700 text-sm mb-1">City</label>
              <input
                type="text"
                name="city"
                value={shippingAddress.city}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
                disabled={checkoutId}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-1">Postal Code</label>
              <input
                type="text"
                name="postalCode"
                value={shippingAddress.postalCode}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
                disabled={checkoutId}
              />
            </div>
          </div>

          <div className="mt-4 mb-8">
            <label className="block text-gray-700 text-sm mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={shippingAddress.phone}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              disabled={checkoutId}
            />
          </div>

          {/* Conditional Rendering of Buttons */}
          {!checkoutId ? (
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors cursor-pointer"
            >
              Continue to Payment
            </button>
          ) : (
            <div>
              <h3 className="text-lg mb-4">Pay with PayPal</h3>
              {/* PayPal component */}
              <PayPalButton 
                amount={cart.totalPrice} 
                onSuccess={handlePaymentSuccess} 
                onError={(err) => alert("Payment failed. Try again.")}
              />
            </div>
          )}
        </form>
      </div>

      {/* Right Side: Order Summary - UPDATED LAYOUT */}
      <div className="bg-gray-50 p-6 rounded-lg h-fit">
        <h3 className="text-xl font-semibold mb-6">Order Summary</h3>
        
        {/* Product List */}
        <div className="mt-4">
          {cart.products.map((product, index) => (
            <div key={index} className="flex items-start justify-between py-4 border-b border-gray-200">
              <div className="flex items-start">
                <img src={product.image} alt={product.name} className="w-20 h-24 object-cover rounded-md mr-4" />
                <div>
                  <h4 className="font-medium text-gray-800">{product.name}</h4>
                  <p className="text-sm text-gray-500">Size: {product.size}</p>
                  <p className="text-sm text-gray-500">Color: {product.color}</p>
                </div>
              </div>
              <p className="text-lg font-medium text-gray-900">${product.price}</p>
            </div>
          ))}
        </div>

        {/* Pricing Breakdown */}
        <div className="mt-6 space-y-2">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span className="text-gray-900 font-medium">${cart.totalPrice}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Shipping</span>
            <span className="text-gray-900 font-medium font-bold">FREE</span>
          </div>
          <hr className="my-4 border-gray-300" />
          <div className="flex justify-between items-center text-xl font-bold text-gray-900 pt-2">
            <span>Total</span>
            <span>${cart.totalPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;