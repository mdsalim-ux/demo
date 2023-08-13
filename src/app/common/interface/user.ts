
  export class ILogin {
    uid!: string;
    email!: string;
  }

  export class IRegister {
      userName!: string;
      email!: string;
      password!: string;
  }
  export class IRefreshToken {
      jwtToken!: "string";
      refreshToken!: "string";
  }
  