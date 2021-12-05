import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, setTodo, setVisibilityFilter } from '../actions/actions';
import TodoComponent from '../components/Todo/TodoComponent';
import LoginNotFound from '../components/ErrorPages/LoginNotFound';

class TodoContainer extends Component {
  constructor() {
    super();

    this.handleActualTodoChange = this.handleActualTodoChange.bind(this);
    this.handleAddTodoChange = this.handleAddTodoChange.bind(this);
    this.handleShowAllClick = this.handleButtonClick.bind(this, 'SHOW_ALL');
    this.handleShowActiveClick = this.handleButtonClick.bind(
      this,
      'SHOW_ACTIVE',
    );
    this.handleShowCompletedClick = this.handleButtonClick.bind(
      this,
      'SHOW_COMPLETED',
    );
  }

  handleAddTodoChange(event) {
    if (event.key === 'Enter') {
      this.props.addTodo(event.target.value);
      event.target.value = '';
    }
  }

  handleActualTodoChange(todoID) {
    this.props.setTodo(todoID);
  }

  handleButtonClick(id) {
    this.props.setVisibilityFilter(id);
  }

  render() {
    if (this.props.user === null) {
      return <LoginNotFound />;
    }

    return (
      <div>
        <TodoComponent
          todos={this.props.todos}
          onAddTodoChange={this.handleAddTodoChange}
          onActualTodoChange={this.handleActualTodoChange}
          showActive={this.handleShowActiveClick}
          showCompleted={this.handleShowCompletedClick}
          showAll={this.handleShowAllClick}
        />
      </div>
    );
  }
}

const handleVisibiltyfilter = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed);

    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed);

    case 'SHOW_ALL':
      return todos;

    default:
      return todos;
  }
};

function mapStateToProps(state) {
  if (state.activeUser === null) {
    return {
      todos: [],
      user: state.activeUser,
    };
  }
  return {
    todos: handleVisibiltyfilter(
      state.activeUser.todos,
      state.visibilityFilter,
    ),
    user: state.activeUser,
  };
}

const mapDispatchToProps = {
  addTodo,
  setTodo,
  setVisibilityFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
