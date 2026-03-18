import React from 'react'
import { RiDeleteBin3Line } from 'react-icons/ri';

const CartContents = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      color: "Red", // Fixed typo from 'colo'
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "Jeans",
      size: "L",
      color: "Blue", // Fixed typo from 'colo'
      quantity: 1,
      price: 25,
      image: "https://picsum.photos/200?random=2",
    },
  ]

  return (
    <div>
      {cartProducts.map((product, index) => (
        <div key={index} className="flex items-start justify-between py-4 border-b border-gray-100">
          <div className="flex items-start">
            {/* Refinement: Removed rounded corners and added subtle border */}
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-20 h-24 object-cover mr-4 rounded-none border border-gray-100"
            />
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">
                {product.name}
              </h3>
              <p className="text-xs text-gray-500 uppercase tracking-tighter mt-1">
                Size: {product.size} | Color: {product.color}
              </p>
              
              {/* Refinement: Unified quantity selector style */}
              <div className="flex items-center mt-4 border border-gray-200 w-fit">
                <button className="px-2 py-1 text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer">
                  -
                </button>
                <span className="px-3 text-xs font-semibold">{product.quantity}</span>
                <button className="px-2 py-1 text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer">
                  +
                </button>
              </div>
            </div>
          </div>
          
          <div className="text-right">
            <p className="text-sm font-bold text-gray-900">${product.price}</p>
            <button className="mt-4 text-gray-400 hover:text-red-600 transition-colors cursor-pointer">
              <RiDeleteBin3Line className="h-5 w-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;