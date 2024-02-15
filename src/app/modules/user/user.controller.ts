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

// get all users except super admin
const getAllUsers = catchAsync(async (_req, res) => {
  const result = await UserServices.getAllUsersFromDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Users retrieved successfully",
    data: result,
  });
});

// update user
const updateUser = catchAsync(async (req, res) => {
  const { userId } = req.params;

  const result = await UserServices.updateUserIntoDB(userId, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Users updated successfully",
    data: result,
  });
});

// delete user
const deleteUser = catchAsync(async (req, res) => {
  const { userId } = req.params;
  const result = await UserServices.deleteUserFromDB(userId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User deleted successfully",
    data: result,
  });
});

// login user
const login = catchAsync(async (req, res) => {
  const result = await UserServices.login(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User login successfully",
    data: result,
  });
});

export const userController = {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
  login,
};
