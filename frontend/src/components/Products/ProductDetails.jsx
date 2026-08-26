import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductDetails,
  fetchSimilarProducts,
} from "../../redux/slices/productSlice";
import { addToCart } from "../../redux/slices/cartSlice";

// COMPONENT UPDATE: Added 'product' and 'isHome' props
const ProductDetails = ({ productId, isHome = false }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedProduct, loading, error, similarProducts } = useSelector(
    (state) => state.products,
  );
  const { user, guestId } = useSelector((state) => state.auth);

  // Tracked with the product it belongs to so a new product resets the selection.
  const [pickedImage, setPickedImage] = useState({ id: null, url: null });
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const productFetchId = productId || id;
  const displayImage =
    (pickedImage.id === productFetchId ? pickedImage.url : null) ||
    selectedProduct?.images?.[0]?.url;

  useEffect(() => {
    if (productFetchId) {
      dispatch(fetchProductDetails(productFetchId));
      dispatch(fetchSimilarProducts({ id: productFetchId }));
    }
  }, [dispatch, productFetchId]);


  const handleQuantityChange = (action) => {
    if (action === "plus") setQuantity((prev) => prev + 1);
    if (action === "minus" && quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select a size and color.", { duration: 1500 });
      return;
    }
    setIsButtonDisabled(true);
    dispatch(
      addToCart({
        productId: productFetchId,
        quantity,
        size: selectedSize,
        color: selectedColor,
        guestId,
        userId: user?._id,
      }),
    )
      .then(() => {
        toast.success("Product added to cart!", {
          duration: 1000,
        });
      })
      .finally(() => {
        setIsButtonDisabled(false);
      });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message || "An error occurred"}</p>;
}

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      {selectedProduct && (
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left: Thumbnails */}
            <div className="hidden md:flex flex-col space-y-4">
              {(selectedProduct.images || []).map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={image.altText}
                  className={`w-20 h-24 object-cover cursor-pointer transition-opacity border ${displayImage === image.url ? "border-black" : "border-transparent opacity-60 hover:opacity-100"}`}
                  onClick={() => setPickedImage({ id: productFetchId, url: image.url })}
                />
              ))}
            </div>

            {/* Center: Main Image */}
            <div className="md:w-1/2">
              <img
                src={displayImage}
                alt="Main Product"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>

            {/* Right: Info */}
            <div className="md:w-1/2">
              <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 uppercase tracking-tight">
                {selectedProduct.name}
              </h1>

              <div className="flex items-center space-x-3 mb-6">
                <span className="text-2xl font-medium text-gray-900">
                  $ {selectedProduct.price}
                </span>
                {selectedProduct.originalPrice && (
                  <span className="text-lg text-gray-400 line-through">
                    $ {selectedProduct.originalPrice}
                  </span>
                )}
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed max-w-md">
                {selectedProduct.description}
              </p>

              {/* Attribute Selectors... (rest of your existing logic) */}
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-4">
                  Color
                </p>
                <div className="flex gap-3">
                  {(selectedProduct.colors || []).map((color) => (
                    <button
                      key={color}
                      className={`w-8 h-8 rounded-full border transition-all ${selectedColor === color ? "ring-2 ring-black ring-offset-2" : "border-gray-200"}`}
                      style={{ backgroundColor: color.toLowerCase() }}
                      onClick={() => setSelectedColor(color)}
                    />
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-4">
                  Size
                </p>
                <div className="flex gap-2">
                  {(selectedProduct.sizes || []).map((size) => (
                    <button
                      key={size}
                      className={`w-12 h-12 flex items-center justify-center border text-sm transition-all ${selectedSize === size ? "bg-black text-white border-black" : "border-gray-200 text-gray-600 hover:border-black"}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-4">
                  Quantity
                </p>
                <div className="flex items-center border border-gray-200 w-fit">
                  <button
                    onClick={() => handleQuantityChange("minus")}
                    className="px-4 py-2 hover:bg-gray-50 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 font-medium">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange("plus")}
                    className="px-4 py-2 hover:bg-gray-50 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                className={`w-full py-4 text-xs font-bold uppercase tracking-widest transition-all ${isButtonDisabled ? "bg-gray-200 text-gray-400" : "bg-black text-white hover:bg-gray-800"}`}
                disabled={isButtonDisabled}
                onClick={handleAddToCart}
              >
                {isButtonDisabled ? "Adding..." : "Add to Cart"}
              </button>
            </div>
          </div>

          {/* LOGIC CHANGE: Only show Similar Products if NOT on Home page */}
          {!isHome && (
            <div className="mt-24">
              <h2 className="text-2xl font-bold text-center uppercase tracking-tight mb-12">
                You May Also Like
              </h2>
              <ProductGrid products={similarProducts || []} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
