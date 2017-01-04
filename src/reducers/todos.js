const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false,
        editable: false
      }
    case 'TOGGLE_EDIT':
    if (state.id !== action.id) {
      return state
    }
    return {
      ...state,
      editable: !state.editable
    }
    case 'EDIT_TODO':
      if (state.id !== action.id) {
        return state
      }
      return {
        ...state,
        text: action.newText,
        editable: !state.editable
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }
      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_EDIT':
      return state.map(t =>
        todo(t, action)
      )
    case 'EDIT_TODO':
      return state.map(t =>
        todo(t, action)
      )
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default todos
