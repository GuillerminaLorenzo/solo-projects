const Account = require('./account')
const BankStatement = require('./bankStatement')

const acc = new Account()
acc.deposit(1000)
acc.deposit(2000)
acc.withdrawal(500)
acc.balance()

const bank = new BankStatement(acc.transactions)
console.log(bank.printStatement())
