const Account = require('./account')
const BankStatement = require('./bankStatement')

describe('integration', () => {
  it('makes transactions in an account and prints the bank statement', () => {
    const acc = new Account()
    acc.deposit(1000)
    acc.balance()
    acc.deposit(2000)
    acc.balance()
    acc.withdrawal(500)
    acc.balance()

    const bank = new BankStatement(acc.transactions)
    const result = bank.printStatement()

    expect(result).toBe(
      'date || credit || debit || balance\nMon Oct 24 2022 || || 500.00 || 2500.00\nMon Oct 24 2022 || 2000.00 || || 3000.00\nMon Oct 24 2022 || 1000.00 || || 1000.00'
    )
  })
})
