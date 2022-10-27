const Transaction = require('../src/transaction')

describe('Transaction', () => {
  it('recognises deposit as a valid fuction', () => {
    const mockAcc = {
      newTransaction: (transaction, transactionAmount) => {},
      balanceAmount: 1000
    }
    const transaction = new Transaction(mockAcc)
    transaction.deposit(1000)
    const result = mockAcc.balanceAmount
    expect(result).toEqual(1000)
  })
  it('recognises withdrawal as a valid fuction', () => {
    const mockAcc = {
      newTransaction: (transaction, transactionAmount) => {},
      balanceAmount: 500
    }
    const transaction = new Transaction(mockAcc)
    transaction.withdrawal(500)
    const result = mockAcc.balanceAmount
    expect(result).toEqual(500)
  })
  it('recognises invalid negative deposits', () => {
    const mockAcc = {}
    const transaction = new Transaction(mockAcc)
    expect(() => {
      transaction.deposit(-1000)
    }).toThrow('Invalid transaction')
  })
  it('recognises invalid negative withdrawal', () => {
    const mockAcc = {}
    const transaction = new Transaction(mockAcc)
    expect(() => {
      transaction.withdrawal(-1000)
    }).toThrow('Invalid transaction')
  })
  it('recognises invalid amount for deposit', () => {
    const mockAcc = {
      newTransaction: (transaction, transactionAmount) => {},
      balanceAmount: 1000
    }
    const transaction = new Transaction(mockAcc)
    expect(() => {
      transaction.deposit('1000')
    }).toThrow('Invalid transaction')
  })
  it('recognises invalid amount for withdrawal', () => {
    const mockAcc = {
      newTransaction: (transaction, transactionAmount) => {},
      balanceAmount: 1000
    }
    const transaction = new Transaction(mockAcc)
    expect(() => {
      transaction.withdrawal('1000')
    }).toThrow('Invalid transaction')
  })
  it('should throw an error if deposit is called without an argument', () => {
    const mockAcc = {
      newTransaction: (transaction, transactionAmount) => {},
      balanceAmount: 1000
    }
    const transaction = new Transaction(mockAcc)
    expect(() => {
      transaction.deposit()
    }).toThrow('Invalid transaction')
  })
  it('should throw an error if withdrawal called without an argument', () => {
    const mockAcc = {
      newTransaction: (transaction, transactionAmount) => {},
      balanceAmount: 1000
    }
    const transaction = new Transaction(mockAcc)
    expect(() => {
      transaction.withdrawal()
    }).toThrow('Invalid transaction')
  })
})
