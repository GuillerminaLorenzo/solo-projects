class Account {
  constructor () {
    this.transactions = []
    this.balanceAmount = 0
  }

  dateFormatter () {
    const date = new Date()
    return `${date.getUTCDate()}/${date.getUTCMonth() + 1}/${date.getUTCFullYear()}`
  }

  deposit (amountDeposited) {
    if (amountDeposited <= 0) {
      throw new Error('Invalid transaction')
    } else {
      this.transactions.unshift({
        date: this.dateFormatter(),
        amount: amountDeposited,
        transactionType: 'deposit',
        balance: amountDeposited + this.balanceAmount
      })
    }
  }

  withdrawal (amountWithdrawn) {
    if (amountWithdrawn > this.balanceAmount || amountWithdrawn <= 0) {
      throw new Error('Invalid transaction')
    } else {
      this.transactions.unshift({
        date: this.dateFormatter(),
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
