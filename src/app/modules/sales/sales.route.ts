import expres from "express";
import validateRequest from "../../middleware/validateRequest";
import { SalesValidations } from "./sales.validation";
import { SalesController } from "./sales.controller";
import auth from "../../middleware/auth";

const router = expres.Router();

// sales product
router.post(
  "/sell",
  auth(),
  validateRequest(SalesValidations.createSalesValidationSchema),
  SalesController.salesProduct,
);

// get sales history
router.get("/", auth(), SalesController.salesHistory);

export const SalesRoutes = router;
