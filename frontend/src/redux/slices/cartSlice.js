import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Helper function to load from localStorage
const loadCartFromStorage = () => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : {products: []};
};


//Helper function to save cart to localStorage
const saveCartToStorage = (cart) => {
    localStorage.setItem("cart",JSON.stringify(cart));
};

// The server no longer has a cart for this user/guest (e.g. the DB was
// reseeded), so whatever is cached locally is stale and can't be edited.
const resetCart = (state) => {
    state.cart = {products: []};
    localStorage.removeItem("cart");
};

const isMissingCart = (payload) =>
    payload?.status === 404 && payload?.message?.toLowerCase() === "cart not found";

// Fetch cart for a user or guest
export const fetchCart = createAsyncThunk("cart/fetchCart", async({userId, guestId},{rejectWithValue})=>{
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/cart`,{
            params: { userId, guestId },
        });
        return response.data;
    } catch (error) {
        console.error(error);
        return rejectWithValue({ ...error.response?.data, status: error.response?.status });
    }
});

//Add an item to the cart for a user or guest
export const addToCart = createAsyncThunk("cart/addToCart", async ({productId, quantity, size, color, guestId, userId}, {rejectWithValue}) => {
    try {
        const response = await axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/api/cart`,{
                productId,
                quantity,
                size,
                color,
                guestId,
                userId,
            }
        );
        return response.data;
    } catch (error) {
        return rejectWithValue({ ...error.response?.data, status: error.response?.status });
    }
})


// Update the quantity of an item in the cart
export const updateCartItemQuantity = createAsyncThunk(
    "cart/updateCartItemQuantity", async({productId, quantity, guestId, userId, size, color},{rejectWithValue}) => {
        try {
            const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/cart`,{
                productId,
                quantity,
                guestId,
                userId,
                size,
                color,
            });
            return response.data;
        } catch (error) {
            return rejectWithValue({ ...error.response?.data, status: error.response?.status });
        }
    }
);

//Remove an item from the cart
export const removeFromCart = createAsyncThunk("cart/removeFromCart", async({productId, guestId, userId, size, color}, {rejectWithValue}) =>{
    try {
        const response = await axios({
            method: "DELETE",
            url: `${import.meta.env.VITE_BACKEND_URL}/api/cart`,
            data: { productId, guestId, userId, size, color},
        })
        return response.data;
    } catch (error) {
        return rejectWithValue({ ...error.response?.data, status: error.response?.status });
    }
});

//Merge guest cart into user cart
export const mergeCart = createAsyncThunk("cart/mergeCart", async({userId,guestId}, {rejectWithValue}) =>{
    try {
        const response = await axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/api/cart/merge`,
            { userId, guestId },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("userToken")}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        return rejectWithValue({ ...error.response?.data, status: error.response?.status });
    }
});

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: loadCartFromStorage(),
        loading: false,
        error: null,
    },
    reducers: {
        clearCart: (state) => {
            state.cart = {products: []};
            localStorage.removeItem("cart");
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchCart.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchCart.fulfilled, (state, action) => {
            state.loading = false;
            state.cart = action.payload;
            saveCartToStorage(action.payload);
        })
        .addCase(fetchCart.rejected, (state, action) => {
            state.loading = false;
            // No cart on the server is normal for a new visitor, not an error.
            if (action.payload?.status === 404) {
                resetCart(state);
                return;
            }
            state.error = action.payload?.message || "Failed to fetch cart";
        })
        .addCase(addToCart.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(addToCart.fulfilled, (state, action) => {
            state.loading = false;
            state.cart = action.payload;
            saveCartToStorage(action.payload);
        })
        .addCase(addToCart.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?.message || "Failed to add to cart";
        })
        .addCase(updateCartItemQuantity.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(updateCartItemQuantity.fulfilled, (state, action) => {
            state.loading = false;
            state.cart = action.payload;
            saveCartToStorage(action.payload);
        })
        .addCase(updateCartItemQuantity.rejected, (state, action) => {
            state.loading = false;
            if (isMissingCart(action.payload)) {
                resetCart(state);
                return;
            }
            state.error = action.payload?.message || "Failed to update item quantity";
        })
        .addCase(removeFromCart.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(removeFromCart.fulfilled, (state, action) => {
            state.loading = false;
            state.cart = action.payload;
            saveCartToStorage(action.payload);
        })
        .addCase(removeFromCart.rejected, (state, action) => {
            state.loading = false;
            if (isMissingCart(action.payload)) {
                resetCart(state);
                return;
            }
            // The server cart exists but doesn't hold this item, so the local
            // copy is out of date: drop the item here too.
            if (action.payload?.status === 404) {
                const { productId, size, color } = action.meta.arg;
                state.cart.products = state.cart.products.filter(
                    (p) => !(p.productId === productId && p.size === size && p.color === color)
                );
                saveCartToStorage(state.cart);
                return;
            }
            state.error = action.payload?.message || "Failed to remove item";
        })
        .addCase(mergeCart.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(mergeCart.fulfilled, (state, action) => {
            state.loading = false;
            state.cart = action.payload;
            saveCartToStorage(action.payload);
        })
        .addCase(mergeCart.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?.message || "Failed to merge cart";
        });
    }
});

export const {clearCart} = cartSlice.actions;
export default cartSlice.reducer;
