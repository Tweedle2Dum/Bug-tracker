import { JWT } from "next-auth/jwt";

export interface TokenObject {
    email: string;
    sub: string;
    accessToken: string;
    exp: number ;
    iat: number ;
    idToken: string;
    jti: string;
    // Add other properties as needed
  }



declare module 'next-auth' {
    interface Session{
        token:TokenObject | JWT
    }
}