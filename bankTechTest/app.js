const Account = require('./src/account')
const BankStatement = require('./src/bankStatement')
const Transaction = require('./src/transaction')

const acc = new Account()
const transaction = new Transaction(acc)

transaction.deposit(1000.00)
acc.balance()
transaction.deposit(2000.00)
acc.balance()
transaction.withdrawal(5000.00)
acc.balance()

const bank = new BankStatement(acc.transactions)
console.log(bank.printStatement())
