import * as express from 'express';
import { validationService } from '../../common';
import { todoCreateSchema, todoEditSchema } from './todo-item-schema';
import { todoController } from './todo.controller';

export function getTodoRoutes(router: express.Router) {
  router.delete(
    '/:id',
    todoController.delete
  );
  router.put(
    '/:id',
    validationService.validateModel(
      todoEditSchema
    ),
    todoController.put
  );
  router.post(
    '/',
    validationService.validateModel(
      todoCreateSchema
    ),
    todoController.post
  );
  return router;
}
