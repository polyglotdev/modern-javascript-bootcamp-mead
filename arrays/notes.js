const notes = ['Note 1', 'Note 2', 'Note 3', 'Note 4', 'Note 5', 'Note 6']

notes.push('Note 7')
// notes.pop()

// shift and unshift
// notes.shift()
// notes.unshift('Note 1')

// notes.splice(0, 6, 'Note 1')
// console.log(notes)

for (let index = 0; index < notes.length; index++) {
  console.log(notes[index])
}

const found = notes.find((note) => note === 'Note 1')
console.log(found)
