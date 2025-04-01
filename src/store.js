import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./redux/slices/cartSlice"
import productsReducer from "./redux/slices/productsSlice"
const store = configureStore({
    reducer: {
      cart: cartReducer,
      products: productsReducer,
    },
  });
  
  export default store;