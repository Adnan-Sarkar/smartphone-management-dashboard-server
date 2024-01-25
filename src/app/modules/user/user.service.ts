import config from "../../config";
import { IUser } from "./user.interface";
import User from "./user.model";
import bcrypt from "bcrypt";

// create an user
const createUser = async (payload: IUser) => {
  // hashing password
  const hashedPassword = await bcrypt.hash(
    payload.password,
    Number(config.salt_rounds),
  );

  payload.password = hashedPassword;

  const result = await User.create(payload);

  return result;
};

export const UserServices = {
  createUser,
};
