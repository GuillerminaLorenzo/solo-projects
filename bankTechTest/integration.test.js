const Account = require('./account')
const BankStatement = require('./bankStatement')

describe('integration', () => {
  it('makes transactions in an account and prints the bank statement', () => {
    const acc = new Account()
    acc.transactions = ([{
      date: '24/10/2022',
      amount: -500,
      transactionType: 'withdrawal',
      balance: 2500
    },
    {
      date: '24/10/2022',
      amount: 2000,
      transactionType: 'deposit',
      balance: 3000
    },
    {
      date: '24/10/2022',
      amount: 1000,
      transactionType: 'deposit',
      balance: 1000
    }])

    const bank = new BankStatement(acc.transactions)
    const result = bank.printStatement()

    expect(result).toBe(
      'date || credit || debit || balance\n24/10/2022 || || 500.00 || 2500.00\n24/10/2022 || 2000.00 || || 3000.00\n24/10/2022 || 1000.00 || || 1000.00'
    )
  })
})
