class Transaction {
  constructor (account) {
    this.account = account
  }

  checkValidInput (amount) {
    if (amount <= 0 || amount === undefined || typeof amount !== 'number') {
      throw new Error('Invalid transaction')
    }
  }

  deposit (amountDeposited) {
    this.checkValidInput(amountDeposited)
    this.account.newTransaction('deposit', amountDeposited)
  }

  withdrawal (amountWithdrawn) {
    if (amountWithdrawn <= this.account.balanceAmount) {
      this.checkValidInput(amountWithdrawn)
      this.account.newTransaction('withdrawal', -amountWithdrawn)
    } else {
      throw new Error('Invalid transaction')
    }
  }
}

module.exports = Transaction
