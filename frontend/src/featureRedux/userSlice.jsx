import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginInfos: null,
  token: null,
  firstName: null,
  lastName: null,
  userName: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoginInfos: (state, action) => {
      state.loginInfos = action.payload;
    },
    setUserToken: (state, action) => {
      state.token = action.payload;
    },
    setUserFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setUserLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setUsername: (state, action) => {
      state.userName = action.payload;
    },
    setLogout: (state) => {
      state.loginInfos = null;
      state.token = null;
      state.firstName = null;
      state.lastName = null;
      state.userName = null;
    },
  },
});

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export const {
  setLoginInfos,
  setUserToken,
  setUserFirstName,
  setUserLastName,
  setUserFullName,
  setUsername,
  setLogout,
} = userSlice.actions;
