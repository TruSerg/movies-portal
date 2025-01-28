import { createSlice } from "@reduxjs/toolkit";

interface signUpUserState {
  isAuth: boolean;
  userName: string;
  errorMessage: string;
}

const initialState: signUpUserState = {
  isAuth: false,
  userName: "",
  errorMessage: "",
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
    changeErrorMessage(state, { payload }) {
      state.errorMessage = payload;
    },
  },
});

export const { signUpUser, saveUserName, changeErrorMessage } =
  signUpUserSlice.actions;

export default signUpUserSlice.reducer;
