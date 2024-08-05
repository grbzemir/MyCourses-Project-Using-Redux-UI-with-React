import { createSlice } from '@reduxjs/toolkit';
import courseItems from '../CourseItems';

const initialState = {
    cartItems: courseItems,
    quantity: 5,
    total: 0,
};

const cardSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];

        },
        removeItem: (state, action) => {
            // console.log(action.payload);
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId);

        },
        increase: (state, action) => {

            const cartItem = state.cartItems.find((item) => item.id === action.payload);
            cartItem.quantity++;

        },

        decrease: (state, action) => {

            const cartItem = state.cartItems.find((item) => item.id === action.payload);
            cartItem.quantity--;

        }
    },
});

// console.log(cartSlice);

export const { clearCart } = cardSlice.actions;
export const { removeItem } = cardSlice.actions;
export const { increase } = cardSlice.actions;
export const { decrease } = cardSlice.actions;

export default cardSlice.reducer;
