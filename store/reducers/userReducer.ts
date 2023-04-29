import { createReducer } from "@reduxjs/toolkit";
import { AppState } from "../appState";
import { registerUserAction } from "@/corelogic/usecases/register-user/registerUserAction";
import { loginUserAction } from "@/corelogic/usecases/login-user/loginUserAction";

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

  builder.addCase(loginUserAction, (state, { payload }) => {
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
