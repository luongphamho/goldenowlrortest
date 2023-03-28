import { createSlice } from "@reduxjs/toolkit";
let memCart = [];
const cartItems = `cartItems`;

if (localStorage.getItem(cartItems)) {
  memCart = JSON.parse(localStorage.getItem(cartItems));
}

const initialState = {
  cart: memCart,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const index = state.cart.findIndex((item) => item.id === action.item.id);
      if (index === -1) {
        state.cart.push(action.item);
        localStorage.setItem(cartItems, JSON.stringify(state.cart));
        // return { ...state };
      }
    //   return state;
    },
    removeToCart: (state, action) => {
      state.cart = [...state.cart.filter((item) => item.id !== action.id)];
      localStorage.setItem(cartItems, JSON.stringify(state.cart));
    //   return { ...state };
    },
    addItem: (state, action) => {
      state.cart.map((item) =>
        item.id === action.id ? (item.amount += 1) : item
      );
      localStorage.setItem(cartItems, JSON.stringify(state.cart));
    //   return { ...state };
    },
    subItem: (state, action) => {
      let index = state.cart.findIndex((item) => item.id === action.id);
      let shoe = state.cart[index];
      if (shoe.amount > 1) {
        shoe.amount -= 1;
        localStorage.setItem(cartItems, JSON.stringify(state.cart));
        // return { ...state };
      } else if (shoe.amount === 1) {
        state.cart = [...state.cart.filter((item) => item.id !== action.id)];
        localStorage.setItem(cartItems, JSON.stringify(state.cart));
        // return { ...state };
      }
    },
  },
});

export const { addToCart, removeToCart, subItem, addItem } = cartSlice.actions;
