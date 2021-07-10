import jwtDecode from "jwt-decode";

interface AuthPayload {
  id: number;
}

interface PayloadBase {
  iat: number;
  exp?: number;
  aud: string;
  iss: string;
  jti: string;
  nbf: string;
}

type Payload = AuthPayload & PayloadBase;

export class JwtStorage {
  private _jwt: string | null = null;
  private _payload?: Payload;
  private expiration?: number;

  constructor(private readonly key: string) {
    this.token = localStorage.getItem(key);
  }

  private setJWT(token: string) {
    if (token !== this._jwt && !!this._payload) {
      localStorage.setItem(this.key, token);
      this._jwt = token;
      this._payload = jwtDecode(token);
      this.expiration =
        typeof this._payload!.exp === "number"
          ? this._payload!.exp * 1000
          : Infinity;
    }
  }

  private removeJWT() {
    localStorage.removeItem(this.key);
    this._jwt = null;
    this._payload = undefined;
    this.expiration = undefined;
  }

  get isValid(): boolean {
    return !!this.expiration && this.expiration >= Date.now();
  }

  get payload(): Payload | undefined {
    return this._payload;
  }

  get jwt(): string | null {
    return this.isValid ? this._jwt : null;
  }

  set token(token: string | null) {
    if (token) {
      this.setJWT(token);
    } else {
      this.removeJWT();
    }
  }
}
