import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type TInitialState = {
  userId: string | null;
  token: string | null;
};

const initialState: TInitialState = {
  userId: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<TInitialState>) => {
      state.userId = action.payload.userId;
      state.token = action.payload.token;
    },
    logOut: (state) => {
      state.userId = null;
      state.token = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logOut } = authSlice.actions;

export const userId = (state: RootState) => state.auth.userId;
export const token = (state: RootState) => state.auth.token;

export default authSlice.reducer;
