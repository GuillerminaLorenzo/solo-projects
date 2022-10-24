class Account {
  constructor () {
    this.transactions = []
    this.balanceAmount = 0
  }

  deposit (amountDeposited) {
    this.transactions.unshift({
      date: new Date().toDateString(),
      amount: amountDeposited,
      transactionType: 'deposit',
      balance: amountDeposited + this.balanceAmount
    })
  }

  withdrawal (amountWithdrawn) {
    if (amountWithdrawn > this.balanceAmount) {
      return 'Invalid transaction'
    } else {
      this.transactions.unshift({
        date: new Date().toDateString(),
        amount: -amountWithdrawn,
        transactionType: 'withdrawal',
        balance: -amountWithdrawn + this.balanceAmount
      })
    }
  }

  balance () {
    this.balanceAmount = this.transactions.map(
      (transaction) => transaction.amount
    ).reduce((a, b) => a + b, 0)
    return this.balanceAmount
  }
}

module.exports = Account
