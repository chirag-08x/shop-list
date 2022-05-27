import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./features/shop/shop_slice";
import modalReducer from "./features/modal/modal_slice";
import filterReducer from "./features/filters/filter_slice";

export const store = configureStore({
  reducer: {
    shop: shopReducer,
    modal: modalReducer,
    filters: filterReducer,
  },
});
