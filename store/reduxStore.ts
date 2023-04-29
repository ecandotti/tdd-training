import {
  Action,
  AnyAction,
  configureStore,
  Store,
  ThunkAction,
  ThunkDispatch,
} from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { AppState } from "./appState";
import { userReducer as user } from "@/store/reducers/userReducer";
import { AuthenticationGateway } from "@/corelogic/gateways/authenticationGateway";

export type Dependencies = {
  authenticationGateway: AuthenticationGateway;
};

export const initReduxStore = (dependencies: Partial<Dependencies>, activeRTKListeners = false) => {
  return configureStore({
    reducer: {
      user,
    },
    devTools: true,
    middleware: getDefaultMiddleware => {
      const middleware = getDefaultMiddleware({
        thunk: {
          extraArgument: dependencies,
        },
        serializableCheck: false,
      });
      if (activeRTKListeners) return middleware;
      return middleware;
    },
  });
};

export type ReduxStore = Store<AppState> & {
  dispatch: ThunkDispatch<AppState, any, Action>;
};

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, any, AnyAction>;

export type AppDispatch = ThunkDispatch<AppState, any, Action>;

export const useAppDispatch: () => AppDispatch = useDispatch;
