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

export const SalesController = {
  salesProduct,
};
