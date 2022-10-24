class Account {
    constructor(){
        this.transactions = [],
        this.balanceAmount = 0;
    }
    
    deposit(amountDeposited){
        this.transactions.unshift({"date": new Date().toDateString(), 
                                        "amount": amountDeposited,
                                        "transactionType": "deposit",
                                        "balance": amountDeposited + this.balanceAmount });
        this.balance();
    }

    withdrawal(amountWithdrawn){
        if (amountWithdrawn > this.balanceAmount) {
            return "Invalid transaction";
        }else {
            this.transactions.unshift({"date": new Date().toDateString(), 
                                            "amount": -amountWithdrawn, 
                                            "transactionType": "withdrawal",
                                            "balance": -amountWithdrawn + this.balanceAmount});
            this.balance();
        }
    }

    balance(){
        const getAmounts = this.transactions.map(transaction => transaction.amount);
        const totalAmount = getAmounts.reduce((a, b) => a + b, 0);
        this.balanceAmount = totalAmount
        return totalAmount
    }
}

module.exports = Account;