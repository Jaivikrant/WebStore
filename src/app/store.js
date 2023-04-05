import { configureStore } from '@reduxjs/toolkit';
import slideReducer from "../features/Slices/sliderSlice";
import productsReducer from "../features/Slices/productsSlice";
import cartRedudcer from "../features/Slices/cartSlice";
import authReducer from "../features/Slices/authSlice";



export const store = configureStore({
  reducer: {
    slider: slideReducer,
    products: productsReducer,
    cart: cartRedudcer,
    user: authReducer,

  },
});
