import React, { Component, PropTypes } from 'react';

class Todo extends Component{

  render(){
    let input;
    let { onClick, completed, text, id, onToggleEdit, onEditSubmit, editable} = this.props;
    if(editable){
      return(
        <div>
          <form onSubmit={e => {
            e.preventDefault()
            onEditSubmit(id, input.value)
          }}>
            <input defaultValue={text} ref={node => {
              input = node
            }} />
            <button type="submit">
              submit
            </button>
          </form>
        </div>
      );
    }
    return(
      <div>
        <li>
          <span
            onClick={onClick}
            style={{textDecoration: completed ? 'line-through' : 'none',
                    cursor: 'pointer',
                    color: completed ? 'green' : 'red'}}>
          {text}
          </span>
          <button onClick={onToggleEdit}>Edit</button>
        </li>
      </div>
    );
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onEditSubmit: PropTypes.func.isRequired,
  onToggleEdit: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  editable: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default Todo;
