import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tasks: [],
  userTask: [],
};
const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if (state.tasks.length == 0) {
        state.tasks.push({ id: 1, status: "pending", ...payload });
      } else {
        const lastElement = state.tasks.at(-1);
        state.tasks.push({
          id: lastElement.id + 1,
          status: "pending",
          ...payload,
        });
      }
    },
    updateTask: (state, { payload }) => {
      const target = state.tasks.find((item) => item.id == payload.id);
      target.status = payload.status;
    },
    removeTask: (state, { payload }) => {
      state.tasks = state.tasks.filter((item) => item.id !== payload);
    },
    userTaskAdd: (state, { payload }) => {
      state.userTask = state.tasks.filter((item) => item.assign_to == payload);
    },
  },
});
export const { addTask, updateTask, removeTask,userTaskAdd } = tasksSlice.actions;
export default tasksSlice.reducer;
