const Account = require('./account')

describe('account', () => {
  it('makes a deposit of 1000', () => {
    const acc = new Account()
    acc.deposit(1000)
    const result = acc.balance()
    expect(result).toEqual(1000)
  })

  it('makes a deposit of 1000 and a withdrawal of 500', () => {
    const acc = new Account()
    acc.deposit(1000)
    acc.withdrawal(500)
    const result = acc.balance()
    expect(result).toEqual(500)
  })

  it('tries to withdraw more money than the balance', () => {
    const acc = new Account()
    acc.deposit(1000)
    const result = acc.withdrawal(5000)
    expect(result).toEqual('Invalid transaction')
  })
})
