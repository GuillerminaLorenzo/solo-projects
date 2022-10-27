const Account = require('../src/account')

describe('account', () => {
  it('should start with balance equal to zero', () => {
    const acc = new Account()
    const result = acc.balance()
    expect(result).toEqual(0)
  })
  it('makes a deposit, expects the correct balance', () => {
    const acc = new Account()
    acc.newTransaction('deposit', 1000)
    const result = acc.balance()
    expect(result).toEqual(1000)
  })

  it('makes a deposit and a withdrawal, expects the correct balance', () => {
    const acc = new Account()
    acc.newTransaction('deposit', 1000)
    acc.balance()
    acc.newTransaction('withdrawal', -500)
    const result = acc.balance()
    expect(result).toEqual(500)
  })

  it('accepts a float when passed to deposit, expects number with 2 decimals', () => {
    const acc = new Account()
    acc.newTransaction('deposit', 84.67)
    const result = acc.balance()
    expect(result).toEqual(84.67)
  })

  it('accepts a float when passed to withdrawal, expects number with 2 decimals', () => {
    const acc = new Account()
    acc.newTransaction('deposit', 1000)
    acc.balance()
    acc.newTransaction('withdrawal', -500.25)
    const result = acc.balance()
    expect(result).toEqual(499.75)
  })
})
