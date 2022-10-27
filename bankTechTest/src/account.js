class Account {
  constructor () {
    this.transactions = []
    this.balanceAmount = 0
  }

  dateFormatter () {
    const date = new Date()
    return `${date.getUTCDate()}/${date.getUTCMonth() + 1}/${date.getUTCFullYear()}`
  }

  newTransaction (transaction, transactionAmount) {
    const newTransaction = {
      date: this.dateFormatter(),
      amount: transactionAmount,
      transactionType: transaction,
      balance: transactionAmount + this.balanceAmount
    }
    this.transactions.unshift(newTransaction)
  }

  balance () {
    this.balanceAmount = this.transactions.map(
      (transaction) => transaction.amount
    ).reduce((a, b) => a + b, 0)
    return this.balanceAmount
  }
}

module.exports = Account
