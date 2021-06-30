import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import './home.scss';
import { CreateTodoItem } from './../../components/create-todo-item/create-todo-item';
import { Dispatch } from "redux"
import { ITodoItem } from "@vodafone/api-interfaces"
import { addTodoItem, getTodoItems, removeTodoItem, TodoState, updateTodoItem } from "../../store"
import { TodoItem } from './../../components/todo-item/todo-item';

export const Home: React.FC = () => {

  const items: readonly ITodoItem[] = useSelector(
    (state: TodoState) => state.items,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const saveItem = React.useCallback(
    (item: ITodoItem) => dispatch(addTodoItem(item)),
    [dispatch]
  );
  React.useEffect(() => {
    dispatch(getTodoItems());
  }, []);

  return (
    <div className="focal-column home">
      <h1>TODO Items</h1>
      <CreateTodoItem saveItem={saveItem} />
      <ul>
        {items.map((item: ITodoItem) => (
          <TodoItem
            key={item.id}
            item={item}
            removeItem={removeTodoItem}
            updateItem={updateTodoItem}
          />
        ))}
      </ul>
    </div>
  )

}
