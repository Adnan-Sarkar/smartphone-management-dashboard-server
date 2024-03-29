import httpStatus from "http-status";
import AppError from "../error/AppError";
import catchAsync from "../utils/catchAsync";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import { TUserRoles } from "../modules/user/user.interface";

const auth = (...allowedUserRoles: TUserRoles[]) => {
  return catchAsync(async (req, _res, next) => {
    // check token is available or not
    const token = req.headers.authorization;

    if (!token) {
      throw new AppError(
        httpStatus.UNAUTHORIZED,
        "You do not have the necessary permissions to access this resource.",
      );
    }

    // check the token is valid or not
    const decode = jwt.verify(
      token,
      config.jwt_access_token_secret as string,
    ) as JwtPayload;

    if (!decode.email) {
      throw new AppError(httpStatus.UNAUTHORIZED, "Token is expired!");
    }

    if (!allowedUserRoles.includes(decode?.role)) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");
    }

    return next();
  });
};

export default auth;
