# Bank tech test

This program creates an account where you can make transactions such as deposits or withdrawals. You can also print your bank statement where you will be able to see all the information about your transactions. 

**How do we do that?**
Initialising an account, you could make transactions using the functions deposit(param) or withdrawal(param) passing the amount of money as a parameter. Also you can initialise a bankStatement(param) which takes the transactions of the account as a parameter, to that you can call the function printStatement to get your statement

## Design

**Account**
```javascript
dateFormatter()
// creates new date with the right format

newTransaction (transaction, transactionAmount) // type of transaction and it's amount
// creates a new transaction with the right format

balance() 
// updates the balance after the transactions
// returns balance
```

**Transactions**
```javascript
checkValidInput(amount)
//checks for valid amount

deposit(amountDeposited)  // amount of money deposited
// sets the new transaction as the deposit 

withdrawal(amountWithdrawn)  // amount of money withdrawn
// if the withdrawal is smaller than the current balance, the transaction is invalid
// sets the new transaction as the withdrawal 
```

**Bank Statement**
```javascript
printStatement() 
// returns that array joined(as string)

amountFormatter(amount)
// returns formatted amount with two decimals

addTransaction()
// stores all the transactions in an array
```

**App**
```javascript
//Initialises the Account and BankStatement, creates transactions and prints the bank statement
```
## It uses:
- [ESLint](https://eslint.org) for linting.
- [Jest](https://jestjs.io/) for testing.

## If you want to try this on your computer follow these instructions:

### Install Node.js

1. Install Node Version Manager (NVM)
   ```
   brew install nvm
   ```
   Then follow the instructions to update your `~/.bash_profile`.
2. Open a new terminal
3. Install the latest version of [Node.js](https://nodejs.org/en/), currently `18.1.0`.
   ```
   nvm install 18
   ```

### Set up your project

1. Fork this repository
2. Clone your fork to your local machine
3. Install Node.js dependencies
   ```
   npm install
   ```
4. Install an ESLint plugin for your editor. For example: [linter-eslint](https://github.com/AtomLinter/linter-eslint) for Atom.

### How to run the program

```
node app.js
```

## Expected output

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

### How to run the tests

- Run a check
  ```bash
  npm run lint              # linter only
  jest                      # unit tests only
  jest --coverage           # test coverage
  ```

## Test coverage
![alt text](https://github.com/GuillerminaLorenzo/solo-projects/blob/main/bankTechTest/test-coverage.png)
