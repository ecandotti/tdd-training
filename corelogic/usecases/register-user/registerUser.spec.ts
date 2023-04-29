import { AppState } from "@/store/appState";
import { ReduxStore, initReduxStore } from "@/store/reduxStore";
import { registerUser } from "./registerUser";
import { FakeAuthenticationGateway } from "@/adapters/secondary/authentication/gateways/fakeAuthenticationGateway";

describe("Register user", () => {
  let store: ReduxStore;
  let initialState: AppState;
  let authenticationGateway: FakeAuthenticationGateway;

  beforeAll(() => {
    authenticationGateway = new FakeAuthenticationGateway();
    store = initReduxStore({ authenticationGateway });
    initialState = store.getState();
  });

  it("Initially should not have token", () => {
    expect(store.getState()).toEqual({
      ...initialState,
      user: {
        token: null,
        message: null,
      },
    });
  });

  it("Should return error message and null token when register failed", () => {
    const email = "fakeemail@lol.fr";
    const password = "1234567";
    const errorMessage = "Une erreur est survenue";

    store.dispatch(registerUser(email, password));
    expect(store.getState()).toEqual({
      ...initialState,
      user: {
        token: null,
        message: errorMessage,
      },
    });
  });

  it("Should return token when register success", () => {
    const email = "fakeemail@lol.fr";
    const password = "1234567";

    authenticationGateway.success = true;
    store.dispatch(registerUser(email, password));
    expect(store.getState()).toEqual({
      ...initialState,
      user: {
        token: store.getState().user.token,
        message: null,
      },
    });
  });
});
