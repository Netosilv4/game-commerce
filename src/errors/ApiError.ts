import { StatusCodes } from 'http-status-codes';

class ApiError extends Error {
  public readonly statusCode: number;

  constructor(message : string, statusCode : number) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }

  static notFound(message : string) {
    throw new ApiError(message, StatusCodes.NOT_FOUND);
  }

  static unauthorized(message : string) {
    throw new ApiError(message, StatusCodes.UNAUTHORIZED);
  }

  static badRequest(message: string) {
    throw new ApiError(message, StatusCodes.BAD_REQUEST);
  }
}

export default ApiError;
