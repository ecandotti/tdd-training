import { AppThunk, Dependencies } from "@/store/reduxStore";
import { registerUserAction } from "./registerUserAction";

export const registerUser =
  (email: string, confirmEmail: string, password: string): AppThunk =>
  (
    dispatch,
    getState,
    { authenticationGateway }: { authenticationGateway: Dependencies["authenticationGateway"] },
  ) => {
    const query = authenticationGateway.register(email, confirmEmail, password);
    dispatch(registerUserAction(query));
  };
