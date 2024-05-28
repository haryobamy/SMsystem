/* eslint-disable @typescript-eslint/indent */
export type AuthState = {
  user: null | IUser;
  auth: boolean;
  loginerror: string;
  accessToken: string;
};
export type IUser = {};
