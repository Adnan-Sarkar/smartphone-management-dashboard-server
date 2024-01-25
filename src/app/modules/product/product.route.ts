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

export const ProductRoutes = router;
