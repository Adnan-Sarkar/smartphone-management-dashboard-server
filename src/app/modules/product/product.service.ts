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

// delete multiple products
const deleteMultipleProductsFromDB = async (payload: { idList: string[] }) => {
  const idList = payload.idList;
  const result = Product.deleteMany({
    _id: {
      $in: idList,
    },
  });

  return result;
};

// update single product by id
const updateSingleProductIntoDB = async (
  id: string,
  payload: Partial<IProduct>,
) => {
  const {
    name,
    price,
    quantity,
    releaseDate,
    brand,
    model,
    operatingSystem,
    storage,
    screenSize,
    battery,
    camera,
    processor,
    rating,
    colors,
    chargingType,
    weight,
    details,
    discount,
    productImage,
  } = payload;

  const updatedInfo: Record<string, unknown> = {};

  if (storage && Object.keys(storage).length > 0) {
    Object.entries(storage).forEach(([key, value]) => {
      updatedInfo[`storage.${key}`] = value;
    });
  }

  if (camera && Object.keys(camera).length > 0) {
    Object.entries(camera).forEach(([key, value]) => {
      updatedInfo[`camera.${key}`] = value;
    });
  }

  if (processor && Object.keys(processor).length > 0) {
    Object.entries(processor).forEach(([key, value]) => {
      updatedInfo[`camera.${key}`] = value;
    });
  }

  if (colors) {
    updatedInfo.colors = colors;
  }

  if (name) {
    updatedInfo.name = name;
  }

  if (price) {
    updatedInfo.price = price;
  }

  if (quantity) {
    updatedInfo.quantity = quantity;
  }

  if (releaseDate) {
    updatedInfo.releaseDate = releaseDate;
  }

  if (brand) {
    updatedInfo.brand = brand;
  }

  if (model) {
    updatedInfo.model = model;
  }

  if (operatingSystem) {
    updatedInfo.operatingSystem = operatingSystem;
  }

  if (screenSize) {
    updatedInfo.screenSize = screenSize;
  }

  if (battery) {
    updatedInfo.battery = battery;
  }

  if (rating) {
    updatedInfo.rating = rating;
  }

  if (chargingType) {
    updatedInfo.chargingType = chargingType;
  }

  if (weight) {
    updatedInfo.weight = weight;
  }

  if (details) {
    updatedInfo.details = details;
  }

  if (discount) {
    updatedInfo.discount = discount;
  }

  if (productImage) {
    updatedInfo.productImage = productImage;
  }

  // update the productinfo
  const result = await Product.findByIdAndUpdate(id, updatedInfo, {
    new: true,
    runValidators: true,
  });

  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  deleteSingleProductFromDB,
  deleteMultipleProductsFromDB,
  updateSingleProductIntoDB,
};
