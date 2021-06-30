import { todoItemValidationCriteria } from "@vodafone/api-interfaces";
import { Joi } from "express-validation";

function buildSchema(bodyRules: any, paramRules: any = {}) {
  return {
    body: Joi.object({
      done: Joi.boolean(),
      text: Joi.string(),
      ...bodyRules,
    }),
    params: Joi.object({
      ...paramRules
    })
  };
}

export const todoEditSchema = buildSchema(
  {},
  {
    id: Joi.string()
      .required()
  }
);

export const todoCreateSchema = buildSchema(
  {
    text: Joi.string()
      .required()
      .max(todoItemValidationCriteria.maxLength),
  }
);
