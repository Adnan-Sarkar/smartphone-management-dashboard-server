import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { ProductValidations } from "./product.validation";
import { ProductController } from "./product.controller";
import auth from "../../middleware/auth";

const router = express.Router();

// create a product
router.post(
  "/create-product",
  auth(),
  validateRequest(ProductValidations.createProductValidationSchema),
  ProductController.createProduct,
);

// get all products include stock out
router.get("/all-products", auth(), ProductController.getAllProducts);

// get single product by id
router.get("/:productId", auth(), ProductController.getSingleProduct);

// delete single product by id
router.delete("/:productId", auth(), ProductController.deleteSingleProduct);

// update single product by id
router.patch(
  "/:productId",
  auth(),
  validateRequest(ProductValidations.updateProductValidationSchema),
  ProductController.updateSingleProduct,
);

// delete multiple products
router.delete("/", auth(), ProductController.deleteMultipleProducts);

// get all stock products
router.get("/", auth(), ProductController.getAllStockProducts);

export const ProductRoutes = router;
