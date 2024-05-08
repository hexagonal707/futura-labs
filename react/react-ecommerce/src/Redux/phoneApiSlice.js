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
  },
});

export const { addPhoneInfo, addCartInfo } = data.actions;
export default data.reducer;
