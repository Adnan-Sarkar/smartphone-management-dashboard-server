/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const apiNotFound = (_req: Request, res: Response, _next: NextFunction) => {
  return res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "API not found",
  });
};

export default apiNotFound;
