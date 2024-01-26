import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { SalesServices } from "./sales.service";

// sale a product
const salesProduct = catchAsync(async (req, res) => {
  const result = await SalesServices.salesProductIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Product sales successfully",
    data: result,
  });
});

// get sales history
const salesHistory = catchAsync(async (req, res) => {
  const result = await SalesServices.salesHistory(req.query);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Product sales history retrieved successfully",
    data: result,
  });
});

export const SalesController = {
  salesProduct,
  salesHistory,
};
