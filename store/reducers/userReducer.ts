import { createReducer } from "@reduxjs/toolkit";
import { AppState } from "../appState";
import { registerUserAction } from "@/corelogic/usecases/register-user/registerUserAction";

const initialState = {
  token: null,
  message: null,
};

export const userReducer = createReducer<AppState["user"]>(initialState, builder => {
  builder.addCase(registerUserAction, (state, { payload }) => {
    if (payload.token === null) {
      return {
        token: payload.token,
        message: payload.message,
      };
    } else {
      return {
        token: payload.token,
        message: null,
      };
    }
  });
});
