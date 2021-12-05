import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

function ProfileTodo({ text, completed }) {
  return (
    <div>
      {(completed === false) && <ListGroupItem> {text} </ListGroupItem>}
    </div>
  );
}

export default ProfileTodo;
