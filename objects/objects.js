let myBook = {
  title: `Harry Potter - The Half Blood Prince`,
  author: `JK Rowling`,
  yearPublished: 2003
}

console.log(myBook)
console.log(`Book Title: ${myBook.title}`)

myBook.title = `Animal Farm`
console.log(`Book Title: ${myBook.title}`)

const person = {
  name: `Dom Hallan`,
  age: 38,
  location: `St. Louis, MO`
}

console.log(person)
const stats = `My name is ${person.name} and I am ${person.age}. I live in ${person.location}.`
console.log(stats)
