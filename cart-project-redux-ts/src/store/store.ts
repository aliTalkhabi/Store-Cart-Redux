import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './cart-slice';

configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
})