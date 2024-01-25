import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { ProductValidations } from "./product.validation";
import { ProductController } from "./product.controller";

const router = express.Router();

// create a product
router.post(
  "/create-product",
  validateRequest(ProductValidations.createProductValidationSchema),
  ProductController.createProduct,
);

// get single product by id
router.get("/:productId", ProductController.getSingleProduct);

// delete single product by id
router.delete("/:productId", ProductController.deleteSingleProduct);

// update single product by id
router.patch(
  "/:productId",
  validateRequest(ProductValidations.updateProductValidationSchema),
  ProductController.updateSingleProduct,
);

// delete multiple products
router.delete("/", ProductController.deleteMultipleProducts);

// get all products
router.get("/", ProductController.getAllProducts);

export const ProductRoutes = router;
