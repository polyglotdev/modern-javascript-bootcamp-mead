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

const sortNotes = (notes) => {
  return notes.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1
    } else {
      return 0
    }
  })
}

const findNotes = (notes, query) => {
  return notes.filter((note) => {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
    return isTitleMatch || isBodyMatch
  })
}

const findNote = (notes, noteTitle) => {
  return notes.find((note, index) => {
    return note.title.toLowerCase() === noteTitle.toLowerCase()
  })
}

sortNotes(notes)
console.log(notes)
