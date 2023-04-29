import { AppState } from "@/store/appState";
import { ReduxStore, initReduxStore } from "@/store/reduxStore";
import { registerUser } from "./registerUser";
import { FakeAuthenticationGateway } from "@/adapters/secondary/authentication/gateways/fakeAuthenticationGateway";

describe("Register user", () => {
  let store: ReduxStore;
  let initialState: AppState;
  let authenticationGateway: FakeAuthenticationGateway;

  const email = "fakeemail@lol.fr";
  let confirmEmail = "fakeemail@lol.fr";
  const password = "1234567";
  const fakeToken = "fakeToken";
  const errorMessage = "Une erreur est survenue";
  const sameMailErrorMessage = "Pas les memes mail";

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
    store.dispatch(registerUser(email, confirmEmail, password));
    expect(store.getState()).toEqual({
      ...initialState,
      user: {
        token: null,
        message: errorMessage,
      },
    });
  });

  it("Should return not same email error message when register failed", () => {
    const confirmEmail = "log@gol.fr";
    store.dispatch(registerUser(email, confirmEmail, password));
    expect(store.getState()).toEqual({
      ...initialState,
      user: {
        token: null,
        message: sameMailErrorMessage,
      },
    });
  });

  it("Should return token when register success", () => {
    authenticationGateway.success = true;
    store.dispatch(registerUser(email, confirmEmail, password));
    expect(store.getState()).toEqual({
      ...initialState,
      user: {
        token: fakeToken,
        message: null,
      },
    });
  });
});
