import expres from "express";
import validateRequest from "../../middleware/validateRequest";
import { SalesValidations } from "./sales.validation";
import { SalesController } from "./sales.controller";
import auth from "../../middleware/auth";

const router = expres.Router();

// sales product
router.post(
  "/sell",
  auth("super-admin", "seller"),
  validateRequest(SalesValidations.createSalesValidationSchema),
  SalesController.salesProduct,
);

// get sales history
router.get("/", auth("super-admin"), SalesController.salesHistory);

export const SalesRoutes = router;
