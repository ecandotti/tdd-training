import { FakeAuthenticationGateway } from "@/adapters/secondary/authentication/gateways/fakeAuthenticationGateway";
import { AppState } from "@/store/appState";
import { ReduxStore, initReduxStore } from "@/store/reduxStore";
import { loginUser } from "./loginUser";

describe("Login user", () => {
  let store: ReduxStore;
  let initialState: AppState;
  let authenticationGateway: FakeAuthenticationGateway;

  beforeAll(() => {
    authenticationGateway = new FakeAuthenticationGateway();
    store = initReduxStore({ authenticationGateway });
    initialState = store.getState();
  });

  it("Should have null token", () => {
    expect(store.getState()).toEqual({
      ...initialState,
      user: {
        token: null,
        message: null,
      },
    });
  });

  it("Should return null token and error message when login failed", () => {
    const email = "test@test.fr";
    const password = "123456";
    const errorMessage = "Une erreur est survenue";

    store.dispatch(loginUser(email, password));
    expect(store.getState()).toEqual({
      ...initialState,
      user: {
        token: null,
        message: errorMessage,
      },
    });
  });

  it("Should return null token and error message when login failed", () => {
    const email = "test@test.fr";
    const password = "123456";
    const errorMessage = "Une erreur est survenue";

    store.dispatch(loginUser(email, password));
    expect(store.getState()).toEqual({
      ...initialState,
      user: {
        token: null,
        message: errorMessage,
      },
    });
  });
});
