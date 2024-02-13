import { ZodError } from "zod";
import { IError } from "../interface/error";

const handleZodError = (error: ZodError): IError => {
  const generateErrorMessage = error?.issues
    .map((issue) => {
      return (issue.message as string).concat(".");
    })
    .join(" ");

  return {
    success: false,
    message: "Validation Error",
    errorDetails: generateErrorMessage,
  };
};

export default handleZodError;
