import httpStatus from "http-status";
import config from "../../config";
import AppError from "../../error/AppError";
import { ILogin, IUser } from "./user.interface";
import User from "./user.model";
import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";

// create an user
const createUser = async (payload: IUser) => {
  const result = await User.create(payload);

  return result;
};

// get all users except super admin
const getAllUsersFromDB = async () => {
  const result = await User.find({
    role: { $ne: "super-admin" },
  });

  return result;
};

// delete user
const deleteUserFromDB = async (id: string) => {
  await User.findByIdAndDelete(id);

  return null;
};

// update user
const updateUserIntoDB = async (id: string, payload: Partial<IUser>) => {
  const { fullName, userName, role, email, phone, gender, age, profileImage } =
    payload;

  const updatedInfo: Record<string, unknown> = {};

  if (fullName) {
    updatedInfo.fullName = fullName;
  }

  if (userName) {
    updatedInfo.userName = userName;
  }

  if (role) {
    updatedInfo.role = role;
  }

  if (email) {
    updatedInfo.email = email;
  }

  if (phone) {
    updatedInfo.phone = phone;
  }

  if (gender) {
    updatedInfo.gender = gender;
  }

  if (age) {
    updatedInfo.age = age;
  }

  if (profileImage) {
    updatedInfo.profileImage = profileImage;
  }

  // update the productinfo
  const result = await User.findByIdAndUpdate(id, updatedInfo, {
    new: true,
    runValidators: true,
  });

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
    role: user?.role,
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
  getAllUsersFromDB,
  deleteUserFromDB,
  updateUserIntoDB,
  login,
};
