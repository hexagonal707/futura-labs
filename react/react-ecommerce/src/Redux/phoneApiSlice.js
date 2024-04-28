import { createSlice } from "@reduxjs/toolkit";

const data = createSlice({
  name: "phoneApiData",
  initialState: {
    phoneInfo: [],
  },
  reducers: {
    addPhoneInfo: (state, action) => {
      console.log("action value", action);
      state.phoneInfo.push(action.payload);
    },
  },
});

export const { addPhoneInfo } = data.actions;
export default data.reducer;
