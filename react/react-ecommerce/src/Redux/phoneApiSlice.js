import { createSlice } from "@reduxjs/toolkit";

const data = createSlice({
  name: "phoneApiData",
  initialState: {
    phoneInfo: [],
    cartInfo: [],
  },
  reducers: {
    addPhoneInfo: (state, action) => {
      state.phoneInfo.push(action.payload);
    },
    addCartInfo: (state, action) => {
      const existingItem = state.cartInfo.find(
        (item) => item.id === action.payload.id,
      );
      if (!existingItem) {
        state.cartInfo.push({ ...action.payload, quantity: 1 });
      } else {
        existingItem.quantity++;
      }
    },
    decQuantity: (state, action) => {
      const existingItem = state.cartInfo.find(
        (item) => item.id === action.payload.id,
      );

      if (!existingItem) {
        action.payload.quantity =
          action.payload.quantity > 1 ? action.payload.quantity - 1 : 1;
        state.cartInfo.push(action.payload);
      } else {
        existingItem.quantity > 1 ? existingItem.quantity-- : 1;
      }
    },
    removeCartItem: (state, action) => {
      const indexToRemove = state.cartInfo.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (indexToRemove !== -1) {
        state.cartInfo.splice(indexToRemove, 1);
      } else {
        console.error("Item not found in cart:", action.payload.id);
      }
    },
    removeCartInfo: (state) => {
      state.cartInfo = [];
    },
  },
});

export const {
  addPhoneInfo,
  addCartInfo,
  decQuantity,
  removeCartItem,
  removeCartInfo,
} = data.actions;
export default data.reducer;
