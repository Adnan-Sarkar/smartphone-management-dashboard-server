import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProductServices } from "./product.service";

// create a product
const createProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.createProductIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Product is created successfully",
    data: result,
  });
});

// get all products
const getAllProducts = catchAsync(async (req, res) => {
  const result = await ProductServices.getAllProductsFromDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Products retrieved successfully",
    data: result,
  });
});

// get single product by id
const getSingleProduct = catchAsync(async (req, res) => {
  const { productId } = req.params;

  const result = await ProductServices.getSingleProductFromDB(productId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Product retrieved successfully",
    data: result,
  });
});

export const ProductController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
};
