import httpStatus from "http-status";
import config from "../../config";
import AppError from "../../error/AppError";
import { ILogin, IUser } from "./user.interface";
import User from "./user.model";
import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";

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

// login user
const login = async (payload: ILogin) => {
  const { email, password } = payload;

  // check wherer user is exists
  const user = await User.findOne({
    email,
  });

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "No user found!");
  }

  // compare password is correct or not
  const isPasswordValid = await bcrypt.compare(password, user?.password);

  if (!isPasswordValid) {
    throw new AppError(httpStatus.BAD_REQUEST, "Password is incorrect!");
  }

  // create JWT access token
  const jwtPayload: JwtPayload = {
    email: user?.email,
    userName: user?.userName,
  };

  const token = jwt.sign(jwtPayload, config.jwt_access_token_secret as string, {
    expiresIn: config.jwt_access_token_expires_in as string,
  });

  return {
    user,
    token,
  };
};

export const UserServices = {
  createUser,
  login,
};
