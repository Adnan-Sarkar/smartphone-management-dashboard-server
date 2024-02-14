import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { ProductValidations } from "./product.validation";
import { ProductController } from "./product.controller";
import auth from "../../middleware/auth";

const router = express.Router();

// create a product
router.post(
  "/create-product",
  auth("super-admin", "branch-manager"),
  validateRequest(ProductValidations.createProductValidationSchema),
  ProductController.createProduct,
);

// get all products include stock out
router.get(
  "/all-products",
  auth("super-admin"),
  ProductController.getAllProducts,
);

// get single product by id
router.get(
  "/:productId",
  auth("super-admin"),
  ProductController.getSingleProduct,
);

// delete single product by id
router.delete(
  "/:productId",
  auth("super-admin"),
  ProductController.deleteSingleProduct,
);

// update single product by id
router.patch(
  "/:productId",
  auth("super-admin", "branch-manager"),
  validateRequest(ProductValidations.updateProductValidationSchema),
  ProductController.updateSingleProduct,
);

// delete multiple products
router.delete(
  "/",
  auth("super-admin"),
  ProductController.deleteMultipleProducts,
);

// get all stock products
router.get("/", auth("super-admin"), ProductController.getAllStockProducts);

export const ProductRoutes = router;
