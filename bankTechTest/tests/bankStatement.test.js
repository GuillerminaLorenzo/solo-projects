const BankStatement = require('../src/bankStatement')

describe('Bank Statements', () => {
  it('prints empty account', () => {
    const account = []
    const bank = new BankStatement(account)
    expect(bank.printStatement()).toEqual('date || credit || debit || balance')
  })

  it('prints an account with multiple transactions', () => {
    const acc = [
      {
        date: '24/10/2022',
        amount: -500.00,
        transactionType: 'withdrawal',
        balance: 2500.00
      },
      {
        date: '24/10/2022',
        amount: 2000.00,
        transactionType: 'deposit',
        balance: 3000.00
      },
      {
        date: '24/10/2022',
        amount: 1000.00,
        transactionType: 'deposit',
        balance: 1000.00
      }
    ]
    const bank = new BankStatement(acc)
    expect(bank.printStatement()).toBe(
      'date || credit || debit || balance\n24/10/2022 || || 500.00 || 2500.00\n24/10/2022 || 2000.00 || || 3000.00\n24/10/2022 || 1000.00 || || 1000.00'
    )
  })
})
