import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./features/taskes/taskesSlice";
const store = configureStore({
  reducer: {
    task: taskSlice,
  },
});
export default store;
