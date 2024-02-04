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

// get all products include stock out
const getAllProducts = catchAsync(async (_req, res) => {
  const result = await ProductServices.getAllProducts();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Products retrieved successfully",
    data: result,
  });
});

// get all stock products
const getAllStockProducts = catchAsync(async (req, res) => {
  const result = await ProductServices.getAllStockProductsFromDB(req.query);

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

// delete single product by id
const deleteSingleProduct = catchAsync(async (req, res) => {
  const { productId } = req.params;

  const result = await ProductServices.deleteSingleProductFromDB(productId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Product deleted successfully",
    data: result,
  });
});

// delete multiple products
const deleteMultipleProducts = catchAsync(async (req, res) => {
  const result = await ProductServices.deleteMultipleProductsFromDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Products are deleted successfully",
    data: result,
  });
});

// update single product by id
const updateSingleProduct = catchAsync(async (req, res) => {
  const { productId } = req.params;

  const result = await ProductServices.updateSingleProductIntoDB(
    productId,
    req.body,
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Product updated successfully",
    data: result,
  });
});

export const ProductController = {
  createProduct,
  getAllProducts,
  getAllStockProducts,
  getSingleProduct,
  deleteSingleProduct,
  deleteMultipleProducts,
  updateSingleProduct,
};
