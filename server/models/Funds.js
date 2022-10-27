const mongoose=require('mongoose');

const FundsSchema={
    accountnumber:{type: String, require: true},
    firstname:{type: String, require: true},
    lastname:{type: String, require: true},
    amount:{type: Number, require: true},
    transaction:[
        {
        transaction_type: {type: String, require: true},
        transaction_description: {type: String, require: true},
        transaction_reference:{type: String, require: true},    
        transaction_deposits:{type: Number, require: true},
        transaction_withdrawals:{type: Number, require: true},
        transaction_date:{type: String, require: true}
        
        }],
        account:[
            {
            amount:{type: Number, require: true},
            previous_balance:{type: Number, require: true},
            new_balance:{type: Number, require: true},
            }
        ]

}
const Funds=mongoose.model("funds",FundsSchema);
module.exports=Funds;