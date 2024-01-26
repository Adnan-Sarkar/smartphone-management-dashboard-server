import mongoose from "mongoose";
import Product from "../product/product.model";
import { ISales } from "./sales.interface";
import Sales from "./sales.model";

// sale a product
const salesProductIntoDB = async (payload: ISales) => {
  // check product ID is valid or not
  const product = await Product.findById(payload.productId).select("quantity");

  if (!product) {
    throw new Error("Invalid product id!");
  }

  // check product quantity is available or not
  const currentQuantity = product.quantity;
  const futureQuantity = currentQuantity - payload.quantity;

  if (currentQuantity > 0 && futureQuantity < 0) {
    throw new Error("Product quantity is not sufficient!");
  }

  // start session
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const result = await Sales.create([payload], { session });

    if (!result[0]) {
      throw new Error("Sales product is not successfull!");
    }

    // decrement quantity from product
    const decrementedProduct = await Product.findByIdAndUpdate(
      payload.productId,
      { quantity: futureQuantity },
      { new: true, runValidators: true, session },
    );

    if (!decrementedProduct) {
      throw new Error("Decrement product quantity is not successfull!!");
    }

    await session.commitTransaction();

    return result[0];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    await session.abortTransaction();
    throw new Error(err.message);
  } finally {
    await session.endSession();
  }
};

export const SalesServices = {
  salesProductIntoDB,
};
