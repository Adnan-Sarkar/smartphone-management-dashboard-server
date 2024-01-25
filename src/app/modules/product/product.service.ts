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

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
};
