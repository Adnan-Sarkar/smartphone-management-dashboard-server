import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { UserValidations } from "./user.validation";
import { userController } from "./user.controller";
import auth from "../../middleware/auth";

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

// update user
router.patch("/user/:userId", auth("super-admin"), userController.updateUser);

// user delete
router.delete("/user/:userId", auth("super-admin"), userController.deleteUser);

// get all users except super admin
router.get("/users", auth("super-admin"), userController.getAllUsers);

export const UserRoutes = router;
