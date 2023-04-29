import { LoginResponse } from "@/corelogic/gateways/authenticationGateway";
import { createAction } from "@reduxjs/toolkit";

export const loginUserAction = createAction<LoginResponse>("LOGIN_USER");
