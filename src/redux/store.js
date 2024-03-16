import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./features/taskes/taskesSlice";
const store = configureStore({
  reducer: {
    taskSlice: taskSlice,
  },
});
export default store;
