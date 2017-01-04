import React, { Component, PropTypes } from 'react';
import Todo from './Todo';

class TodoList extends Component{
  render(){
    const { todos, onTodoClick, onEditSubmit, onToggleEdit } = this.props;
    return(
      <ul>
        {todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => onTodoClick(todo.id)}
            onToggleEdit={() => onToggleEdit(todo.id)}
            onEditSubmit={onEditSubmit}
          />
        )}
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    editable: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onEditSubmit: PropTypes.func.isRequired,
  onToggleEdit: PropTypes.func.isRequired
}

export default TodoList;
