import { z } from "zod";
import { RAM, Storage } from "./product.constant";

const createProductValidationSchema = z.object({
  name: z.string({
    invalid_type_error: "Name must be a string",
    required_error: "Name is required",
  }),
  price: z.number({
    invalid_type_error: "Price must be a number",
    required_error: "Price is required",
  }),
  quantity: z.number({
    invalid_type_error: "Quantity must be a number",
    required_error: "Quantity is required",
  }),
  releaseDate: z.string({
    invalid_type_error: "Release date must be a string",
    required_error: "Release date is required",
  }),
  brand: z.string({
    invalid_type_error: "Brand must be a string",
    required_error: "Brand is required",
  }),
  model: z.string({
    invalid_type_error: "Model must be a string",
    required_error: "Model is required",
  }),
  operatingSystem: z.enum(["iOS", "Android"], {
    invalid_type_error: "Operating system must be either 'iOS' or 'Android'",
    required_error: "Operating system is required",
  }),
  storage: z.enum(Storage as [string, ...string[]], {
    invalid_type_error: "Invalid storage capacity",
    required_error: "Storage capacity is required",
  }),
  screenSize: z.string({
    invalid_type_error: "Screen size must be a string",
    required_error: "Screen size is required",
  }),
  battery: z.string({
    invalid_type_error: "Battery information must be a string",
    required_error: "Battery information is required",
  }),
  frontCamera: z.string({
    invalid_type_error: "Front camera information must be a string",
    required_error: "Front camera information is required",
  }),
  backCamera: z.string({
    invalid_type_error: "Back camera information must be a string",
    required_error: "Back camera information is required",
  }),
  processor: z.string({
    invalid_type_error: "Processor information must be a string",
    required_error: "Processor information is required",
  }),
  ram: z.enum(RAM as [string, ...string[]], {
    invalid_type_error: "Invalid RAM size",
    required_error: "RAM size is required",
  }),
  rating: z
    .number({
      invalid_type_error: "Rating must be a number",
      required_error: "Rating is required",
    })
    .min(0)
    .max(5),
  colors: z.array(
    z.string({
      invalid_type_error: "Colors must be an array of strings",
      required_error: "Colors are required",
    }),
  ),
  chargingType: z.string({
    invalid_type_error: "Charging type must be a string",
    required_error: "Charging type is required",
  }),
  weight: z.string({
    invalid_type_error: "Weight must be a string",
    required_error: "Weight is required",
  }),
  details: z.string({
    invalid_type_error: "Details must be a string",
    required_error: "Details are required",
  }),
  discount: z.boolean({
    invalid_type_error: "Discount must be a boolean",
    required_error: "Discount information is required",
  }),
  productImage: z
    .string({
      invalid_type_error: "Product image must be a string",
      required_error: "Product image is required",
    })
    .optional(),
});

export const ProductValidations = {
  createProductValidationSchema,
};
