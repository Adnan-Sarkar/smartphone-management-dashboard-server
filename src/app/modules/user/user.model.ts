import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";
import { Gender, UserRoles } from "./user.constant";
import bcrypt from "bcrypt";
import config from "../../config";

// create user schema
const userSchema = new Schema<IUser>(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },
    userName: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
    },
    role: {
      type: String,
      enum: UserRoles,
      required: [true, "User role is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    age: {
      type: Number,
      required: [true, "Age is required"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    gender: {
      type: String,
      enum: Gender,
      required: [true, "Gender is required"],
    },
    profileImage: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre("save", async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const userInfo = this;

  // hash the password
  const hashedPassword = await bcrypt.hash(
    userInfo.password,
    Number(config.salt_rounds),
  );

  userInfo.password = hashedPassword;

  next();
});

// create user model
const User = model<IUser>("User", userSchema);

export default User;
