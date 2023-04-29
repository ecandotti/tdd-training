export interface AuthenticationGateway {
  register(email: string, confirmEmail: string, password: string): RegisterResponse;
  login(email: string, password: string): LoginResponse;
}

export type RegisterResponse = { token: string } | { token: null; message: string };

export type LoginResponse = { token: string } | { token: null; message: string };
