const notes = [
  {
    title: `My next trip`,
    body: `I would like to go to Spain`
  },
  {
    title: `Life and Times of Dom`,
    body: `The things we do for love`
  },
  {
    title: `Being better`,
    body: `You are what you tell yourself. So be fucking awesome.`
  }
]

const findNote = (notes, noteTitle) => {
  return notes.find((note, index) => {
    return note.title.toLowerCase() === noteTitle.toLowerCase()
  })
}

const notesResult = findNote(notes, `My next trip`)
console.log(notesResult)
