import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart.slice";
import { shoeSlice } from "./shoe.slice";

const reducer = {
  cart: cartSlice.reducer,
  shoe: shoeSlice.reducer,
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
