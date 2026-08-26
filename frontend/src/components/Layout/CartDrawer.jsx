import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import CartContents from "../Cart/CartContents";
import { useSelector } from "react-redux";

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  const navigate = useNavigate();
  const { user, guestId } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);
  const userId = user ? user._id : null;

  const handleCheckout = () => {
    toggleCartDrawer();
    if (!user) {
      navigate("/login?redirect=checkout");
    } else {
      navigate("/checkout");
    }
  };

  return (
    <>
      {/* Backdrop: Essential for a professional "focused" UI */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${drawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={toggleCartDrawer}
      ></div>

      <div
        className={`fixed top-0 right-0 w-full sm:w-[400px] h-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col z-50 ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header Area */}
        <div className="flex justify-between items-center p-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold uppercase tracking-wider">
            Your Cart
          </h2>
          <button
            onClick={toggleCartDrawer}
            className="p-1 hover:bg-gray-100 transition-colors rounded-full cursor-pointer"
          >
            <IoMdClose className="h-6 w-6 text-gray-800" />
          </button>
        </div>

        {/* Cart content Area */}
        <div className="flex-grow p-4 overflow-y-auto scrollbar-hide">
          {cart && cart?.products?.length > 0 ? (
            <CartContents cart={cart} userId={userId} guestId={guestId} />
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>

        {/* Checkout section fixed at bottom */}
        <div className="p-6 bg-white border-t border-gray-100">
          {cart && cart?.products?.length > 0 && (
            <>
              <button
                onClick={handleCheckout}
                className="w-full bg-black text-white py-4 rounded-none font-medium hover:bg-gray-800 transition-colors duration-300 cursor-pointer uppercase text-sm tracking-widest"
              >
                Checkout
              </button>
              <p className="text-[11px] text-gray-500 mt-4 text-center leading-relaxed">
                Shipping, taxes, and discount codes calculated at checkout.
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
