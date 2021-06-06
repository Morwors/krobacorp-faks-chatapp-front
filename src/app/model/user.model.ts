export interface IUser {
  objectId?: string
  id?: string;
  username?: string;
  email?: string;
  password?: string;
}

export interface IUserLogin{
  username: string;
  password: string;
}

export interface IUserRegister{
  username: string;
  email: string;
  password: string;
}
