import { ITodoItem } from "@vodafone/api-interfaces"
import { ITodoAction, TodoState } from "./actions"
import * as actionTypes from "./actions-types"

const reducer = (
  state: TodoState = { items: [] },
  action: ITodoAction
): TodoState => {
  switch (action.type) {
    case actionTypes.TODO_ITEMS_LOADED:
      return {
        ...state,
        items: (action.data as ITodoItem[]),
      };
    case actionTypes.ADD_TODO_ITEM:
      const newItem: ITodoItem = {
       ...action.data
      };
      return {
        ...state,
        items: state.items.concat(newItem),
      };
    case actionTypes.REMOVE_TODO_ITEM:
      const updatedItems: ITodoItem[] = state.items.filter(
        item => item.id !== (action.data as ITodoItem).id
      );
      return {
        ...state,
        items: updatedItems,
      };
    case actionTypes.UPDATE_TODO_ITEM:
      return {
        ...state,
        items: state.items.map((item: ITodoItem) => {
          return item.id === (action.data as ITodoItem).id ?
            action.data :
            item;
        }),
      };
  }
  return state;
}

export default reducer;
