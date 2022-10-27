const Account = require('../src/account')

describe('account', () => {
  it('makes a deposit, expects the correct balance', () => {
    const acc = new Account()
    acc.deposit(1000)
    const result = acc.balance()
    expect(result).toEqual(1000)
  })

  it('makes a deposit and a withdrawal, expects the correct balance', () => {
    const acc = new Account()
    acc.deposit(1000)
    acc.balance()
    acc.withdrawal(500)
    const result = acc.balance()
    expect(result).toEqual(500)
  })

  it('accepts a float when passed to deposit, expects number rounded with 2 decimals', () => {
    const acc = new Account()
    acc.deposit(84.67)
    const result = acc.balance()
    expect(result).toEqual(84.67)
  })

  it('accepts a float when passed to withdrawal, expects number rounded with 2 decimals', () => {
    const acc = new Account()
    acc.deposit(1000)
    acc.balance()
    acc.withdrawal(500.25)
    const result = acc.balance()
    expect(result).toEqual(499.75)
  })

  it('recognises invalid negative deposits', () => {
    const acc = new Account()
    expect(() => {
      acc.deposit(-1000)
    }).toThrow('Invalid transaction')
  })

  it('recognises invalid withdrawal', () => {
    const acc = new Account()
    acc.deposit(1000)
    acc.balance()
    expect(() => {
      acc.withdrawal(5000)
    }).toThrow('Invalid transaction')
  })

  it('recognises invalid negative withdrawal', () => {
    const acc = new Account()
    expect(() => {
      acc.withdrawal(-1000)
    }).toThrow('Invalid transaction')
  })

  it('recognises invalid amount for deposit', () => {
    const acc = new Account()
    expect(() => {
      acc.deposit('1000')
    }).toThrow('Invalid transaction')
  })

  it('recognises invalid amount for withdrawal', () => {
    const acc = new Account()
    expect(() => {
      acc.withdrawal('1000')
    }).toThrow('Invalid transaction')
  })

  it('should throw an error if deposit is called without an argument', () => {
    const acc = new Account()
    expect(() => {
      acc.deposit()
    }).toThrow('Invalid transaction')
  })

  it('should throw an error if withdrawal called without an argument', () => {
    const acc = new Account()
    expect(() => {
      acc.withdrawal()
    }).toThrow('Invalid transaction')
  })
})
