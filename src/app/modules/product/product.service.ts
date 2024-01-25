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

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
};
