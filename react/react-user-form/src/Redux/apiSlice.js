import { createSlice } from "@reduxjs/toolkit";

const data = createSlice({
  name: "apiData",
  initialState: {
    fullInfo: [],
  },
  reducers: {
    addFullInfo: (state, action) => {
      console.log("action value", action);
      state.fullInfo.push(action.payload);
    },

    removeData: (state, action) => {
      console.log("action value", action);
      state.fullInfo = [];
    },
  },
});

export const { addFullInfo, removeData } = data.actions;
export default data.reducer;
