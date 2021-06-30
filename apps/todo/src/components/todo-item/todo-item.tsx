import * as React from "react"
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"
import './todo-item.scss';
import { ITodoItem } from "@vodafone/api-interfaces";
import { Checkbox, Button } from '@material-ui/core';

type Props = {
  item: ITodoItem;
  removeItem: (item: ITodoItem) => void;
  updateItem: (item: ITodoItem) => void;
}

export const TodoItem: React.FC<Props> = ({ item, removeItem, updateItem }) => {

  const dispatch: Dispatch<any> = useDispatch()

  const deleteItem = React.useCallback(
    (item: ITodoItem) => dispatch(removeItem(item)),
    [dispatch, removeItem]
  );

  const editItem = React.useCallback(
    (item: ITodoItem) => dispatch(updateItem(item)),
    [dispatch, updateItem]
  );

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    editItem({
      ...item,
      done: !item.done
    });
  }

  return (
    <li className="todo-item">
      <span>
        {item.text}
      </span>
      <Checkbox
       checked={item.done}
       onChange={onChange}
       />
      <Button onClick={() => deleteItem(item)}>Delete</Button>
    </li>
  )

}
