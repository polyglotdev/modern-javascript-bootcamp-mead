const { v4: uuidv4 } = require('uuid')

const todos = [
  {
    id: uuidv4(),
    text: 'Get thru training',
    completed: true
  },
  {
    id: uuidv4(),
    text: 'Call Mom',
    completed: true
  },
  {
    id: uuidv4(),
    text: 'Walk the dog',
    completed: false
  }
]

const removeTodos = (todos, todoText) => {
  const todoIndex = todos.findIndex((todo) => {
    return todo.text.toLowerCase() === todoText.toLowerCase()
  })

  return todos.splice(todoIndex, 1)
}

const todosResult = removeTodos(todos, `Walk the dog`)
console.log(todosResult)

// ====== LOG START ======
console.log('\n')
console.group('The Todos')
console.log(todos)
console.groupEnd()
console.log('\n')
// ====== LOG END ======
