const notes = [
  {
    title: `This is JS`,
    body: `Man isn't JavaScript grand?`
  },
  {
    title: `Moving On`,
    body: `Moving on is hard to do, but it is part of life.`
  },
  {
    title: `Work smarter, not harder`,
    body: `Employers ask more of you daily and in that we have to remember to work smarter and not harder.`
  }
]

const getTimesClicked = () => {
  let clickedCount = 0
  const getCreateNoteButton = document
    .getElementById('create-note')
    .addEventListener('click', (event) => {
      if (event) {
        clickedCount++
        event.target.textContent = `You clicked this button ${clickedCount} times.`
      }
      return clickedCount
    })
}

getTimesClicked()
