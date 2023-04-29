export interface AuthenticationGateway {
  register(email: string, password: string): RegisterResponse;
}

export type RegisterResponse =
  | { token: string }
  | { token: null; message: "Une erreur est survenue" };
