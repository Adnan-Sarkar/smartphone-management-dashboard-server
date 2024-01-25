import { IProduct } from "./product.interface";
import Product from "./product.model";

// create a product
const createProductIntoDB = async (payload: IProduct) => {
  const result = await Product.create(payload);

  return result;
};

// get all products
const getAllProductsFromDB = async () => {
  const result = await Product.find();
  return result;
};

// get single product by id
const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id);

  return result;
};

// delete single product by id
const deleteSingleProductFromDB = async (id: string) => {
  // check id is valid
  const product = await Product.findById(id);
  if (!product) {
    throw new Error("No product found!");
  }

  const result = await Product.findByIdAndDelete(id);

  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  deleteSingleProductFromDB,
};
