import { Schema, model } from "mongoose";
import { ISales } from "./sales.validation";

// create sales schema
const salesSchema = new Schema<ISales>(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: [true, "Product id is required"],
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
