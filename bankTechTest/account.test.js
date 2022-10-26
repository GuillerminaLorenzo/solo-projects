const Account = require('./account')

describe('account', () => {
  it('makes a deposit, expects the correct balance', () => {
    const acc = new Account()
    acc.deposit(1000)
    const result = acc.balance()
    expect(result).toEqual(1000)
  })

  it('recognises invalid negative deposits', () => {
    const acc = new Account()
    expect(() => {
      acc.deposit(-1000)
    }).toThrow('Invalid transaction')
  })

  it('makes a deposit and a withdrawal, expects the correct balance', () => {
    const acc = new Account()
    acc.deposit(1000)
    acc.balance()
    acc.withdrawal(500)
    const result = acc.balance()
    expect(result).toEqual(500)
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
})
