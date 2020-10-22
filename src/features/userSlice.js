import { createSlice } from "@reduxjs/toolkit";
//here is where user slice is created for readux is being implemented and we an access to this layer from everywhere.
export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: 0,
  },
  reducers: {
    login: (state, action) => {
      state.user += action.payload;
    },
    logout: (state, action) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectCount = (state) => state.user.user;

export default userSlice.reducer;
