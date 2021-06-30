import { RequestHandler } from 'express';
import { validate } from 'express-validation';

class ValidationService {
  validateModel(schema: any): RequestHandler {
    return validate(schema);
  }
}

export const validationService = new ValidationService();
