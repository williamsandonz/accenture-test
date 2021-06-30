import { ITodoItem } from "@vodafone/api-interfaces";

export interface ITodoAction {
  type: string;
  data: any;
}

export type TodoState = {
  items: ITodoItem[]
}

export type DispatchType = (args: ITodoAction) => ITodoAction
