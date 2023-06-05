import {configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartRed'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        devTools: true
    }
})

export default store;

