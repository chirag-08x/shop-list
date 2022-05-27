import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./features/shop/shop_slice";

export const store = configureStore({
  reducer: {
    shop: shopReducer,
  },
});
