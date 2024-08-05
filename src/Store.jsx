import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Control/CardSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
