import { Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';
import { todoDataService } from "../../common";
import { ToDoItem } from "./todo-item.model";

class TodoController {

  constructor() {
  }

  delete(request: Request, response: Response, next: Function) {
    const id = request.params.id;
    const item = todoDataService.data[id];
    if (!item) {
      return response.sendStatus(404);
    }
    todoDataService.removeItem(id);
    response.send(item);
  }

  post(request: Request, response: Response, next: Function) {
    const body = request.body;
    const item = new ToDoItem(
      body.text,
      uuidv4(),
      body.done
    );
    todoDataService.upsertItem(item);
    response.send(item);
  }

  put(request: Request, response: Response, next: Function) {
    const id = request.params.id;
    const item = todoDataService.data[id];
    if (!item) {
      return response.sendStatus(404);
    }
    const body = request.body;
    // NB: Not saving ID as that shouldn't ne changeable.
    todoDataService.upsertItem(Object.assign(item, body));
    response.send(item);
  }

}

export const todoController = new TodoController();
