import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type TUser = {
  userId: string;
  role: string;
  iat: number;
  exp: number;
};
export type TInitialState = {
  user: TUser | null;
  token: string | null;
};

const initialState: TInitialState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<TInitialState>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },

    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, logOut } = authSlice.actions;

export const getCurrentUser = (state: RootState) => state.auth.user;
export const getCurrenttoken = (state: RootState) => state.auth.token;

export default authSlice.reducer;
