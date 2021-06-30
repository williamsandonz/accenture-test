import { ValidationError } from "express-validation"
import * as express from 'express';
import { IApiErrorResponse } from "@vodafone/api-interfaces";
import { exceptionService } from "../providers/exception.service";

export const errorHandler = (error: any, request: express.Request, response: express.Response, next: Function) => {
  if (response.headersSent) {
    return next(error)
  }
  if (error instanceof ValidationError) {
    return response.status(error.statusCode).json({
      // Cherry pick first error's message, as instructions demand an (error: string) response type.
      // Not viable for production as it should really include key: validationError (array or literal)
      // So that frontend knows which form controls to display error message under.
      error: error.details.body[0].message
    } as IApiErrorResponse)
  }
  exceptionService.handle(error);
  return response.status(500).json({
    error: 'Internal server error'
  } as IApiErrorResponse)
}
