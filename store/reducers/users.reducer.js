import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const initialState = {
  user: 0,
  loading: false,
  error: null,
};

export const userActions = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.user = action.payload;
    },
    loadingUserTrue: (state, action) => {
      state.loading = action.payload;
    },
    loadingUserFalse: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { userLogin, loadingUserTrue, loadingUserFalse } =
  userActions.actions;

export default userActions.reducer;

export const userLoginData = (email, password) => async (dispatch) => {
  try {
    axios
      .post(`${process.env.BACKURL}/auth/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        Cookies.set("userDt", JSON.stringify(res.data), { expires: 365 });
        dispatch(userLogin(res.data));
      });
  } catch (err) {
    console.log(err);
  }
};
