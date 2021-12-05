import React from 'react';
import { Link } from 'react-router-dom';
import Center from 'react-center';
import { PageHeader } from 'react-bootstrap';

import TodoContainer from '../../containers/TodoContainer';

const TodoLayout = () => (
  <div>
    <Link to="/profile"> &#60; Back to Profile</Link>
    <Center>
      <PageHeader>Todo List</PageHeader>
    </Center>
    <TodoContainer />
  </div>
);
export default TodoLayout;
