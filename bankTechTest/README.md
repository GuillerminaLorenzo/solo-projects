# Bank tech test

This program creates an account where you can make transactions such as deposits or withdrawals. You can also print your bank statement where you will be able to see all the information about your transactions. 

**How do we do that?**
Initialising an account, you could make transactions using the functions deposit(param) or withdrawal(param) passing the amount of money as a parameter. Also you can initialise a bankStatement(param) which takes the transactions of the account as a parameter, to that you can call the function printStatement to get your statement

## Design

**Account**
```javascript
deposit(amountDeposited)  // amount of money deposited
// makes the deposit 

withdrawal(amountWithdrawn)  // amount of money withdrawn
// if the withdrawal is smaller than the current balance, the transaction is invalid
// makes the withdrawal 

balance() 
// updates the balance after the transactions
// returns balance
```

**Bank Statement**
```javascript
printStatement() 
// returns that array joined(as string)

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

### How to run the tests

- Run a check
  ```bash
  npm run lint              # linter only
  jest                      # unit tests only
  jest --coverage           # test coverage
  ```

## Test coverage
![alt text](https://github.com/GuillerminaLorenzo/solo-projects/blob/c80938b5d05e6db4ee89ec9713939ebdbdc22399/bankTechTest/test-coverage.png)
