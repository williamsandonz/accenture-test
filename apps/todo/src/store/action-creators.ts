import { ITodoItem, ITodoList } from "@vodafone/api-interfaces"
import { doHttpRequest } from "../services/http-service";
import { DispatchType, ITodoAction } from "./actions"
import * as actionTypes from "./actions-types"

export function getTodoItems() {
  return async (dispatch: DispatchType) => {
    try {
      const list: ITodoList = (await doHttpRequest('get', 'todos')).data;
      const items: ITodoItem[] = Object.keys(list).map((id: string) => {
        return list[id];
      });
      dispatch({
        type: actionTypes.TODO_ITEMS_LOADED,
        data: items,
      } as ITodoAction);
    } catch(e) {
      // TODO If I had more time, I'd dispatch an error action & display message in component
    }
  };
}

export function addTodoItem(transientItem: ITodoItem) {
  return async (dispatch: DispatchType) => {
    try {
      const persistedItem: ITodoItem = (await doHttpRequest('post', 'todo', transientItem)).data;
      dispatch({
        type: actionTypes.ADD_TODO_ITEM,
        data: persistedItem,
      } as ITodoAction);
    } catch(e) {
      // TODO If I had more time, I'd dispatch an error action & display message in component
    }
  };
}

export function removeTodoItem(item: ITodoItem) {
  return async (dispatch: DispatchType) => {
    try {
      const persistedItem: ITodoItem = (await doHttpRequest('delete', `todo/${item.id}`)).data;
      dispatch({
        type: actionTypes.REMOVE_TODO_ITEM,
        data: persistedItem,
      } as ITodoAction);
    } catch(e) {
      // TODO If I had more time, I'd dispatch an error action & display message in component
    }
  };
}

export function updateTodoItem(item: ITodoItem) {
  return async (dispatch: DispatchType) => {
    try {
      const persistedItem: ITodoItem = (await doHttpRequest('put', `todo/${item.id}`, {
        done: item.done
      })).data;
      dispatch({
        type: actionTypes.UPDATE_TODO_ITEM,
        data: persistedItem,
      } as ITodoAction);
    } catch(e) {
      // TODO If I had more time, I'd dispatch an error action & display message in component
    }
  };
}
