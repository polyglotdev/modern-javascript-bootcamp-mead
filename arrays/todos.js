const todos = ['Get thru training', 'Call Mom', 'Walk the dog']
const remainingTodosMessage = `You have ${todos.length} todos left to finish.`

console.log(remainingTodosMessage)
console.log(todos.splice(2, 1, 'Buy cat food'))

let count = 1
todos.forEach((todo) => {
  console.log(`${count++}. ${todo}`)
})
