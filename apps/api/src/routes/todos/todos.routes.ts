import * as express from 'express';
import { todosController } from './todos.controller';

export function getTodosRoutes(router: express.Router) {
  router.get('/', todosController.get);
  return router;
}
