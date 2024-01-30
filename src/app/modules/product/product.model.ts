import { Schema, model } from "mongoose";
import { IProduct } from "./product.interface";
import { OperatingSystems, Storage } from "./product.constant";

// create product schema
const prodyctSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: [true, "Product name is required"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Product price is required"],
    min: 0,
  },
  quantity: {
    type: Number,
    required: [true, "Product quantity is required"],
    min: 0,
  },
  releaseDate: {
    type: String,
    required: [true, "Product release date is required"],
    trim: true,
  },
  brand: {
    type: String,
    required: [true, "Product brand name is required"],
    trim: true,
  },
  model: {
    type: String,
    required: [true, "Product model name is required"],
    trim: true,
  },
  operatingSystem: {
    type: String,
    enum: OperatingSystems,
    required: [true, "Product model name is required"],
  },
  storage: {
    ROM: {
      type: String,
      enum: Storage,
      required: [true, "Product ROM size is required"],
    },
    RAM: {
      type: String,
      enum: Storage,
      required: [true, "Product ROM size is required"],
    },
  },
  screenSize: {
    type: String,
    required: [true, "Product screen size is required"],
    trim: true,
  },
  battery: {
    type: String,
    required: [true, "Product battery size is required"],
    trim: true,
  },
  camera: {
    front: {
      type: String,
      required: [true, "Product front camera is required"],
      trim: true,
    },
    back: {
      type: String,
      required: [true, "Product back camera is required"],
      trim: true,
    },
  },
  processor: {
    type: {
      type: String,
      required: [true, "Processor type is required"],
      trim: true,
    },
    speed: {
      type: String,
      required: [true, "Processor speed is required"],
      trim: true,
    },
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    required: [true, "Product rating is required"],
  },
  colors: {
    type: [String],
  },
  chargingType: {
    type: String,
    required: [true, "Product charging type is required"],
    trim: true,
  },
  weight: {
    type: String,
    required: [true, "Product weight is required"],
    trim: true,
  },
  details: {
    type: String,
    required: [true, "Product details is required"],
    trim: true,
  },
  discount: {
    type: Boolean,
    default: false,
  },
  productImage: {
    type: String,
  },
});

// create product model
const Product = model<IProduct>("Product", prodyctSchema);

export default Product;
