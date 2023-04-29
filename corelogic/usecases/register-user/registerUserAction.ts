import { RegisterResponse } from "../../gateways/authenticationGateway";
import { createAction } from "@reduxjs/toolkit";

export const registerUserAction = createAction<RegisterResponse>("REGISTER_USER");
