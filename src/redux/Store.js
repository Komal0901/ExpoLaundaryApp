import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartReducer";
import ProductSlice from "./ProductReducer";
export const store = configureStore({
  reducer: {
    cart: CartSlice,
    product: ProductSlice,
  },
});
