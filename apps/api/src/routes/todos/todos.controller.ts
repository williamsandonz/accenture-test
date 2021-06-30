import { Request, Response } from "express";
import { todoDataService } from "../../common";

class TodosController {

  constructor() {
  }

  get(request: Request, response: Response) {
    response.send(todoDataService.data);
  }

}

export const todosController = new TodosController();
