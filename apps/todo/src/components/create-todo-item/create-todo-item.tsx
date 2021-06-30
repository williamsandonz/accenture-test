import './create-todo-item.scss';
import React from 'react';
import { ITodoItem, todoItemValidationCriteria } from '@vodafone/api-interfaces';
import { Button, TextField } from '@material-ui/core';

type Props = {
  saveItem: (item: ITodoItem | any) => void
}

export const CreateTodoItem: React.FC<Props> = ({ saveItem }) => {

  const [item, setItem] = React.useState<ITodoItem>()

  const onChange = (e: any) => {
    setItem({
      ...item,
      [e.currentTarget.id]: e.currentTarget.value,
    } as ITodoItem)
  }

  const addNewItem = (e: React.FormEvent) => {
    e.preventDefault();
    saveItem(item);
    setItem({
      ...item,
      text: ''
    })
  }

  return (
    <form onSubmit={addNewItem} className="create-todo-form">
      <TextField
        id="text"
        placeholder="Todo text"
        onChange={onChange}
        inputProps={{ maxLength: todoItemValidationCriteria.maxLength }}
        value={item?.text}
      />
      <Button
        disabled={!item || (item && !item.text)}
        type="submit">
          Create
      </Button>
    </form>
  )
}
