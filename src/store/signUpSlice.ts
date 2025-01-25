import { createSlice } from "@reduxjs/toolkit";

interface signUpUserState {
  isAuth: boolean;
  userName: string;
}

const initialState: signUpUserState = {
  isAuth: false,
  userName: "",
};

const signUpUserSlice = createSlice({
  name: "signUpUser",
  initialState,
  reducers: {
    signUpUser(state, { payload }) {
      state.isAuth = payload;
    },
    saveUserName(state, { payload }) {
      state.userName = payload;
    },
  },
});

export const { signUpUser, saveUserName } = signUpUserSlice.actions;

export default signUpUserSlice.reducer;
