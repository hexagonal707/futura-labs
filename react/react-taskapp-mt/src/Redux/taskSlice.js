// src/features/taskDataSlice.js
import { createSlice } from "@reduxjs/toolkit";

const data = createSlice({
  name: "taskData",
  initialState: {
    title: "",
    description: "",
    taskListInfo: [],
  },
  reducers: {
    setTitle(state, action) {
      state.title = action.payload;
    },
    setDescription(state, action) {
      state.description = action.payload;
    },
    addTask(state, action) {
      state.taskListInfo.push(action.payload);
    },
    removeTask: (state, action) => {
      const indexToRemove = state.taskListInfo.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (indexToRemove !== -1) {
        state.taskListInfo.splice(indexToRemove, 1);
      } else {
        console.error("Item not found in cart:", action.payload.id);
      }
    },
  },
});

export const { removeTask, setTitle, setDescription, addTask } = data.actions;
export default data.reducer;
