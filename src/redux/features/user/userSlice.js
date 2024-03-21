import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "gojo",
  email: "gojo@gmail.com",
 
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
