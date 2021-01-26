const todos = [
  {
    text: 'Get thru training',
    completed: true
  },
  {
    text: 'Call Mom',
    completed: false
  },
  {
    text: 'Walk the dog',
    completed: false
  }
]

// sort by completed
const sortTodos = (todos) => {
  todos.sort((a, b) => {
    if (!a.completed && b.completed) {
      return -1
    } else if (!b.completed && a.completed) {
      return 1
    } else {
      return 0
    }
  })
}

sortTodos(todos) // delete this line
console.log(todos)

//  todos that need to be completed
const incompleteTodos = (todos) => {
  return todos.filter((todo) => {
    return todo.completed === false
  })
}

const removeTodos = (todos, todoText) => {
  const todoIndex = todos.findIndex((todo) => {
    return todo.text.toLowerCase() === todoText.toLowerCase()
  })

  return todos.splice(todoIndex, 1)
}
