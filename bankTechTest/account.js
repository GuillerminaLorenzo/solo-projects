class Account {
    constructor(){
        this.account = {
            "transactions": [],
        };
        this.balanceAmount = 0;
    }
    
    deposit(amountDeposited){
        this.account.transactions.unshift({"date": new Date().toDateString(), 
                                        "amount": amountDeposited,
                                        "transactionType": "deposit"});
        this.balance();
    }

    withdrawal(amountWithdrawn){
        if (amountWithdrawn > this.balanceAmount) {
            return "Invalid transaction";
        }else {
            this.account.transactions.unshift({"date": new Date().toDateString(), 
                                            "amount": -amountWithdrawn, 
                                            "transactionType": "withdrawal"});
            this.balance();
        }
    }

    balance(){
        const getAmounts = this.account.transactions.map(transaction => transaction.amount);
        const totalAmount = getAmounts.reduce((a, b) => a + b, 0);
        this.balanceAmount = totalAmount
        return totalAmount
    }
}

module.exports = Account;