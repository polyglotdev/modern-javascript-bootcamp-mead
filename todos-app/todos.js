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

const notesSetup = (todos, headingValue, todoElement) => {
  let arr = []
  todos.forEach((todo) => {
    arr.push(todo.text)
  })
  const createHeading = document.createElement(headingValue)
  createHeading.textContent = `You have ${arr.length} todos remaining.`
  document.body.appendChild(createHeading)

  arr.forEach((item) => {
    const todos = document.createElement(todoElement)
    todos.textContent = item
    document.body.appendChild(todos)
  })
}

notesSetup(todos, 'h2', 'p')

document.getElementById('create-notes').addEventListener('click', () => {
  console.log('create notes button clicked')
})
