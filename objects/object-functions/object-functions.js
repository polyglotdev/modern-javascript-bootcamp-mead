let myBook = {
  title: `1984`,
  author: `George Orwell`,
  pageCount: 326
}

let otherBook = {
  title: `A People's History`,
  author: `Howard Zinn`,
  pageCount: 723
}

const getSummary = (book) => {
  return {
    summary: `Title: ${book.title} Author: ${book.author} # of Pages: ${book.pageCount}`,
    didItSuck: false
  }
}

const result = getSummary(myBook)
console.log(result)

const tempConverter = (temp) => {
  const fahrenheitToCelsius = (temp - 32) * 0.5556
  let kelvin = ((temp + 459.67) * 5) / 9

  return {
    fahrenheit: `Fahrenheit to Celsius: ${fahrenheitToCelsius}`,
    kelvin: `Fahrenheit to Kelvin: ${kelvin}`
  }
}

const tempResult = tempConverter(74)
console.log(tempResult)
