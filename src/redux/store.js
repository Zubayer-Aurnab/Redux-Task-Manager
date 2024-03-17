import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./features/taskes/taskesSlice";
import userSlice from "./features/user/userSlice";
const store = configureStore({
  reducer: {
    taskSlice: taskSlice,
    userSlice: userSlice,
  },
});
export default store;
