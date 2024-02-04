import { Schema, model } from "mongoose";
import { ISales } from "./sales.interface";

// create sales schema
const salesSchema = new Schema<ISales>(
  {
    productName: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },
    productImage: {
      type: String,
      required: [true, "Product image is required"],
      trim: true,
    },
    productPrice: {
      type: Number,
      required: [true, "Product price is required"],
    },
    quantity: {
      type: Number,
      required: [true, "Product quantity is required"],
      min: 1,
    },
    buyerName: {
      type: String,
      required: [true, "Buyer name is required"],
      trim: true,
    },
    saleDate: {
      type: String,
      required: [true, "Sale date is required"],
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

// create sales model
const Sales = model<ISales>("Sales", salesSchema);

export default Sales;
