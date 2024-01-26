import expres from "express";
import validateRequest from "../../middleware/validateRequest";
import { SalesValidations } from "./sales.validation";
import { SalesController } from "./sales.controller";

const router = expres.Router();

// sales product
router.post(
  "/sell",
  validateRequest(SalesValidations.createSalesValidationSchema),
  SalesController.salesProduct,
);

// get sales history
router.get("/", SalesController.salesHistory);

export const SalesRoutes = router;
