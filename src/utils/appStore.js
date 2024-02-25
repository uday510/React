import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// add slice reducers here

export default appStore;