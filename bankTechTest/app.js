const Account = require('./account')
const BankStatement = require('./bankStatement')

const acc = new Account()
acc.deposit(1000.00)
acc.balance()
acc.deposit(2000.00)
acc.balance()
acc.withdrawal(500.00)
acc.balance()

const bank = new BankStatement(acc.transactions)
console.log(bank.printStatement())
