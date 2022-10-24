const BankStatement = require('./bankStatement');

describe('Bank Statements', ()=> {
    it('prints empty account', () => {
        const account = [];
        const bank = new BankStatement(account);
        expect(bank.printStatement()).toEqual("date || credit || debit || balance");
    });

    it('prints an account with multiple transactions', () => {
        const acc = [
            {
              date: 'Mon Oct 24 2022',
              amount: -500,
              transactionType: 'withdrawal',
              balance: 2500
            },
            {
              date: 'Mon Oct 24 2022',
              amount: 2000,
              transactionType: 'deposit',
              balance: 3000
            },
            {
              date: 'Mon Oct 24 2022',
              amount: 1000,
              transactionType: 'deposit',
              balance: 1000
            }
        ];
        const bank = new BankStatement(acc);
        expect(bank.printStatement()).toBe("date || credit || debit || balance\nMon Oct 24 2022 || || 500.00 || 2500.00\nMon Oct 24 2022 || 2000.00 || || 3000.00\nMon Oct 24 2022 || 1000.00 || || 1000.00");
    });
})