class BankStatement {
  constructor (transactions) {
    this.transactions = transactions
    this.firstStatement = 'date || credit || debit || balance'
    this.statement = []
  }

  printStatement () {
    this.statement.push(this.firstStatement)
    this.addTransaction()
    return this.statement.join('\n')
  }

  addTransaction () {
    this.transactions.forEach((transaction) => {
      if (transaction.transactionType === 'deposit') {
        this.statement.push(
          `${transaction.date} || ${Math.abs(transaction.amount)}.00 || || ${
            transaction.balance
          }.00`
        )
      } else {
        this.statement.push(
          `${transaction.date} || || ${Math.abs(transaction.amount)}.00 || ${
            transaction.balance
          }.00`
        )
      }
    })
  }
}

module.exports = BankStatement
