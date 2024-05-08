import { createSlice } from "@reduxjs/toolkit";

const data = createSlice({
  name: "phoneApiData",
  initialState: {
    phoneInfo: [],
    cartInfo: [],
  },
  reducers: {
    addPhoneInfo: (state, action) => {
      console.log("action value", action);
      state.phoneInfo.push(action.payload);
    },
    addCartInfo: (state, action) => {
      console.log("action value", action.payload.id);
      const cartItemData = state.cartInfo.some((li) => {
        return li.id === action.payload.id;
      });
      !cartItemData && state.cartInfo.push(action.payload);
      console.log("-------------------", cartItemData);

      state.cartInfo.push(action.payload);
    },
  },
});

export const { addPhoneInfo, addCartInfo } = data.actions;
export default data.reducer;
