import {
  AuthenticationGateway,
  RegisterResponse,
} from "@/corelogic/gateways/authenticationGateway";

export class DemoInMemoryAuthenticationGateway implements AuthenticationGateway {
  register(email: string, password: string): RegisterResponse {
    return {
      token: null,
      message: "Une erreur est survenue",
    };
  }
}
