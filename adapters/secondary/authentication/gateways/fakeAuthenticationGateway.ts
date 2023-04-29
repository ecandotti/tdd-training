import {
  AuthenticationGateway,
  LoginResponse,
  RegisterResponse,
} from "@/corelogic/gateways/authenticationGateway";

export class FakeAuthenticationGateway implements AuthenticationGateway {
  private _success: boolean = false;

  register(email: string, confirmEmail: string, password: string): RegisterResponse {
    if (email !== confirmEmail)
      return {
        token: null,
        message: "Pas les memes mail",
      };

    if (this._success) {
      return {
        token: "fakeToken",
      };
    } else {
      return {
        token: null,
        message: "Une erreur est survenue",
      };
    }
  }

  login(email: string, password: string): LoginResponse {
    if (this._success) {
      return {
        token: "done",
      };
    } else {
      return {
        token: null,
        message: "Une erreur est survenue",
      };
    }
  }

  set success(success: boolean) {
    this._success = success;
  }
}
