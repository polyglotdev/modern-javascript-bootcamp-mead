let myAccount = {
  name: 'Dom Hallan',
  expenses: 0,
  income: 0
}

const addToBalance = (account) => {
  account.expenses = 2000
  account.income = 10000

  let balance = account.income - account.expenses
  console.log(balance)

  return myAccount
}

const result = addToBalance(myAccount)
console.log(result)
