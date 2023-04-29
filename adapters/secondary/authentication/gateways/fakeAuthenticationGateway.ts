import {
  AuthenticationGateway,
  RegisterResponse,
} from "@/corelogic/gateways/authenticationGateway";

export class FakeAuthenticationGateway implements AuthenticationGateway {
  private _success: boolean = false;

  register(email: string, password: string): RegisterResponse {
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
