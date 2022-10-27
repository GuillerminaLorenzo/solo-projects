class BankStatement {
  constructor (transactions) {
    this.transactions = transactions
    this.statement = []
  }

  printStatement () {
    this.statement.push('date || credit || debit || balance')
    this.addTransaction()
    return this.statement.join('\n')
  }

  amountformatter (amount) {
    return Math.abs(amount).toFixed(2)
  }

  addTransaction () {
    this.transactions.forEach((transaction) => {
      if (transaction.transactionType === 'deposit') {
        this.statement.push(
          `${transaction.date} || ${this.amountformatter(transaction.amount)} || || ${
            this.amountformatter(transaction.balance)
          }`
        )
      } else {
        this.statement.push(
          `${transaction.date} || || ${this.amountformatter(transaction.amount)} || ${
            this.amountformatter(transaction.balance)
          }`
        )
      }
    })
  }
}

module.exports = BankStatement
