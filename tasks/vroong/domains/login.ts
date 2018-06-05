export interface LoginInterface {
  setToken: (token: string) => void;
  token: string;
}

export interface LoginContext {
  login: LoginInterface;
}

export class Login implements LoginInterface {
  public authToken: string;

  constructor() {
    this.authToken = "";
  }

  public setToken(token: string) {
    this.authToken = token;
  }

  public get token(): string {
    return this.authToken;
  }
}
