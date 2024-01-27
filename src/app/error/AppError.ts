class AppError extends Error {
  public statusCode: number;
  public message: string;
  public errorObject?: Error;

  constructor(statusCode: number, message: string, errorObject?: Error) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.errorObject = errorObject;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default AppError;
