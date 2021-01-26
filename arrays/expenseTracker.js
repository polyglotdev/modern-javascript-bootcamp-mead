const account = {
  name: `Dom`,
  expenses: [
    {
      description: `insurance`,
      amount: 100.0
    },
    {
      description: `groceries`,
      amount: 200.57
    }
  ],
  addExpense(desc, total) {
    this.expenses.push([{ description: desc, amount: total }])
    return this.expenses
  },
  accountBalance() {
    const amounts = []
    const reducer = (accumulator, currentValue) => accumulator + currentValue

    for (let amount in this.expenses) {
      amounts.push(this.expenses[amount].amount)
    }

    amounts.find((element) => {
      if (element === undefined) {
        return amounts.pop(element)
      } else {
        return amounts.reduce(reducer)
      }
    })
    return amounts
  },
  getAccountSummary() {
    let values = this.accountBalance()
    let expenses = values.reduce((prev, curr) => prev + curr)

    return `${this.name} has $${expenses} in expenses.`
  }
}

const summary = account.getAccountSummary()
console.log(summary)

account.addExpense('Coffee', 20.93)
console.log(account.accountBalance())

console.log(account.expenses)
