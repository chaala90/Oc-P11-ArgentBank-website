import {configureStore,createSlice,getDefaultMiddleware,  } from "@reduxjs/toolkit";
import { persistReducer,FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from "redux-persist";
import storage from "redux-persist/lib/storage";


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
const persistConfig = {
  key: "root",
  storage,
};

export const persistedReducer = persistReducer(persistConfig, userSlice.reducer);
export const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },})
});

export const {
  setLoginInfos,
  setUserToken,
  setUserFirstName,
  setUserLastName,
  setUsername,
  setLogout,
} = userSlice.actions;
