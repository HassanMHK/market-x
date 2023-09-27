import { configureStore } from '@reduxjs/toolkit';
// cartReducer name is a rename
import cartReducer from '../features/cart/cartSlice';
import clearCartModalReducer from '../features/cart/clearCartModalSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        clearCartModal: clearCartModalReducer,
    }
});

export default store;