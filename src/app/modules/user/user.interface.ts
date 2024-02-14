export type TUserRoles = "super-admin" | "branch-manager" | "seller";

export interface IUser {
  fullName: string;
  userName: string;
  role: TUserRoles;
  email: string;
  password: string;
  phone: string;
  gender: "male" | "female";
  age: number;
  profileImage?: string;
}

export interface ILogin {
  email: string;
  password: string;
}
