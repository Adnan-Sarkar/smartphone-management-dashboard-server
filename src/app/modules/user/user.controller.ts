import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserServices } from "./user.service";

// create an user
const createUser = catchAsync(async (req, res) => {
  const result = await UserServices.createUser(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "User is created successfully",
    data: result,
  });
});

export const userController = {
  createUser,
};
