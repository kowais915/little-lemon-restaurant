import {configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartRed'
import themeReducer from './themeRed'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        toggle: themeReducer,
        devTools: true
    }
})

export default store;

