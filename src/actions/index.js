
let nextTodoId = 0

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const toggleEdit = (id) => {
  return {
    type: "TOGGLE_EDIT",
    id
  }
}

export const editTodo = (id, newText) => ({
  type: 'EDIT_TODO',
  id: id,
  newText
})

export const setVisibilityFilter = (filter) => {
  return {
    type: "SET_VISIBILITY_FILTER",
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: "TOGGLE_TODO",
    id
  }
}
