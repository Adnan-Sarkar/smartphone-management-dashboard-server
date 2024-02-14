import { z } from "zod";
import { Gender, UserRoles } from "./user.constant";

const createUserValidationSchema = z.object({
  fullName: z.string({
    invalid_type_error: "Full name must be string",
    required_error: "Full name is required",
  }),
  userName: z.string({
    invalid_type_error: "userName must be string",
    required_error: "userName is required",
  }),
  role: z.enum(UserRoles as [string, ...string[]]),
  email: z.string({
    invalid_type_error: "Email must be string",
    required_error: "Email is required",
  }),
  password: z.string({
    invalid_type_error: "Password must be string",
    required_error: "Password is required",
  }),
  age: z.number({
    invalid_type_error: "Age must be number",
    required_error: "Age is required",
  }),
  phone: z.string({
    invalid_type_error: "Phone number must be string",
    required_error: "Phone number is required",
  }),
  gender: z.enum(Gender as [string, ...string[]]),
  profileImage: z
    .string({
      invalid_type_error: "profile image must be string",
    })
    .optional(),
});

const loginUserValidationSchema = z.object({
  email: z.string({
    invalid_type_error: "Email must be string",
    required_error: "Email is required",
  }),
  password: z.string({
    invalid_type_error: "Password must be string",
    required_error: "Password is required",
  }),
});

export const UserValidations = {
  createUserValidationSchema,
  loginUserValidationSchema,
};
