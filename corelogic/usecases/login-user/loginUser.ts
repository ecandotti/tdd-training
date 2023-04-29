import { AppThunk, Dependencies } from "@/store/reduxStore";
import { loginUserAction } from "./loginUserAction";

export const loginUser =
  (email: string, password: string): AppThunk =>
  (
    dispatch,
    _,
    { authenticationGateway }: { authenticationGateway: Dependencies["authenticationGateway"] },
  ) => {
    const query = authenticationGateway.login(email, password);
    return dispatch(loginUserAction(query));
  };
