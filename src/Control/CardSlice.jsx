import { createSlice } from '@reduxjs/toolkit';
import courseItems from '../CourseItems';

const initialState = {
    cartItems: courseItems,
    quantity: 5,
    total: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
            state.quantity = 0;
            state.total = 0;
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
        },
        increase: (state, action) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload);
            if (cartItem) {
                cartItem.quantity++;
            }
        },
        decrease: (state, action) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload);
            if (cartItem && cartItem.quantity > 0) {
                cartItem.quantity--;
            }
        },
        calculateTotal: (state) => {
            let total = 0;
            let quantity = 0;
            state.cartItems.forEach((item) => {
                total += item.quantity * item.price;
                quantity += item.quantity;
            });
            state.quantity = quantity;
            state.total = total;
        },
    },
});

// Export actions
export const { clearCart, removeItem, increase, decrease, calculateTotal } = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
