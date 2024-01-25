import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { UserValidations } from "./user.validation";
import { userController } from "./user.controller";

const router = express.Router();

// create an user
router.post(
  "/register",
  validateRequest(UserValidations.createUserValidationSchema),
  userController.createUser,
);

// login user
router.post(
  "/login",
  validateRequest(UserValidations.loginUserValidationSchema),
  userController.login,
);

export const userRoutes = router;
