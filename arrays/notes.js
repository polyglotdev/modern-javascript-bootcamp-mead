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

const found = notes.find((note) => {
  return note.title.toLowerCase() === 'My next trip'.toLowerCase()
})

console.log(found)
