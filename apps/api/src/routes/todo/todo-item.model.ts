import { ITodoItem } from "@vodafone/api-interfaces";

export class ToDoItem implements ITodoItem {
  done: boolean;
  constructor(
    public text: string,
    public id: string,
    done?: boolean
  ) {
    this.done = done || false;
  }
}
