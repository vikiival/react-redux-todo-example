import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

function TodoListItem(props) {
  const { onActualTodoChange, todoID, text, completed } = props;

  return (
    <ListGroupItem
      onClick={() => onActualTodoChange(todoID)}
      id={todoID}
      style={{
        textDecoration: completed ? 'line-through' : 'none',
        fontWeight: completed ? 'normal' : 'bold',
      }}
    >
      {text}
    </ListGroupItem>
  );
}

export default TodoListItem;
