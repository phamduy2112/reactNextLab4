import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/CartSlice';
import { categoriesSlice } from './slices/Categories';

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        categoriesSlice
    }
})