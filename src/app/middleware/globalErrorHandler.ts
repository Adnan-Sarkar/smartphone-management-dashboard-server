/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from "express";
import { IError } from "../interface/error";
import { ZodError } from "zod";
import httpStatus from "http-status";
import AppError from "../error/AppError";
import handleZodError from "../error/handleZodError";

// eslint-disable-next-line no-unused-vars
const globalErrorHandle: ErrorRequestHandler = (error, _req, res, _next) => {
  let errorResponse: IError = {
    success: false,
    message: "",
    errorDetails: "",
  };

  let statusCode = Number(httpStatus.NOT_FOUND);

  if (error instanceof ZodError) {
    errorResponse = handleZodError(error);
    statusCode = Number(httpStatus.BAD_REQUEST);
  } else if (error?.name === "CastError") {
    errorResponse.message = "Invalid ID";
    errorResponse.errorDetails = `${error?.value} is not a valid ID!`;
    statusCode = Number(httpStatus.NOT_FOUND);
  } else if (error?.code === 11000) {
    errorResponse.message = "Duplicate Entry";
    statusCode = Number(httpStatus.CONFLICT);
  } else if (error instanceof AppError) {
    // check AppError getting any CastError or not
    if (error.errorObject && error.errorObject?.name === "CastError") {
      errorResponse.message = "Invalid ID";
    } else {
      errorResponse.message = error.message;
      statusCode = error.statusCode;
    }
  } else {
    errorResponse.message = error.message;
    statusCode = Number(httpStatus.INTERNAL_SERVER_ERROR);
  }

  return res.status(statusCode).json(errorResponse);
};

export default globalErrorHandle;
