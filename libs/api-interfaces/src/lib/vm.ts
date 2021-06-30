export interface ITodoItem {
  id?: string;
  done?: boolean;
  text: string;
}
export interface ITodoList {
  [id: string]: ITodoItem;
}
