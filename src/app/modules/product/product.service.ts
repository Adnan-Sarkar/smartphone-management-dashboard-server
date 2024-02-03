import { IProduct } from "./product.interface";
import Product from "./product.model";

// create a product
const createProductIntoDB = async (payload: IProduct) => {
  const result = await Product.create(payload);

  return result;
};

// get all products
const getAllProductsFromDB = async (query: Record<string, unknown>) => {
  // filter object
  const filterObj: Record<string, unknown> = {};

  // filtering by product name
  const name = query?.name;
  if (name) {
    filterObj.name = {
      $regex: name,
      $options: "i",
    };
  }

  // filtering by price range
  const price = query?.price;
  if (price) {
    const [min, max] = (price as string).split(",");
    filterObj.price = {
      $gte: Number(min),
      $lte: Number(max),
    };
  }

  // filtering by release date range
  const releaseDateRange = query?.releaseDate;
  if (releaseDateRange) {
    const [startDate, endDate] = (releaseDateRange as string).split(",");
    filterObj.releaseDate = {
      $gte: startDate,
      $lte: endDate,
    };
  }

  // filtering by brand
  const brand = query?.brand;
  if (brand) {
    filterObj.brand = {
      $regex: brand,
      $options: "i",
    };
  }

  // filtering by model
  const model = query?.model;
  if (model) {
    filterObj.model = {
      $regex: model,
      $options: "i",
    };
  }

  // filtering by operating system
  const operatingSystem = query?.operatingSystem;
  if (operatingSystem) {
    filterObj.operatingSystem = {
      $eq: operatingSystem,
    };
  }

  // filtering by storage
  const rom = query?.rom;
  const ram = query?.ram;

  if (rom) {
    filterObj["storage.ROM"] = {
      $eq: rom,
    };
  }

  if (ram) {
    filterObj["storage.RAM"] = {
      $eq: ram,
    };
  }

  // filtering by screen size
  const screenSize = query?.screenSize;
  if (screenSize) {
    filterObj.screenSize = {
      $eq: screenSize,
    };
  }

  // filtering by camera
  const frontCamera = query?.frontCamera;
  const backCamera = query?.backCamera;

  if (frontCamera) {
    filterObj["camera.front"] = {
      $eq: frontCamera,
    };
  }

  if (backCamera) {
    filterObj["camera.back"] = {
      $eq: backCamera,
    };
  }

  // filtering by battery
  const battery = query?.battery;
  if (battery) {
    filterObj.battery = {
      $eq: battery,
    };
  }

  // filtering by colors
  const colors = query?.colors;
  if (colors) {
    const colorsArray = (colors as string).split(",");

    filterObj.colors = {
      $in: colorsArray,
    };
  }

  // filtering by processor
  const processorType = query?.processorType;
  const processorSpeed = query?.processorSpeed;

  if (processorType) {
    filterObj["processor.type"] = {
      $eq: processorType,
    };
  }

  if (processorSpeed) {
    filterObj["processor.speed"] = {
      $eq: processorSpeed,
    };
  }

  // filtering by weight
  const weight = query?.weight;
  if (weight) {
    filterObj.weight = {
      $eq: weight,
    };
  }

  // filtering by discount
  const discount = query?.discount;
  if (discount) {
    filterObj.discount = {
      $eq: discount,
    };
  }

  // filtering by rating
  const rating = query?.rating;
  if (rating) {
    filterObj.rating = {
      $eq: Number(rating),
    };
  }

  // get all products which have quantity > 0
  filterObj.quantity = {
    $gt: 0,
  };

  const result = await Product.find(filterObj);
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
