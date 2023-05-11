const mongoose = require('mongoose');



// transaction schema


const transactionSchema = new mongoose.Schema({
    name:{
        type:String,
     required:true,
    },

    transactionType:{
        type:String,
        enum:[ 
            "Income",
            "Expenses"
        ],
        required:true,
    },
    amount:{
        type:Number,
        required:true,
    },
    category:
        {
        type:string,
        enum:[
            "Savings",
        "Investment",
        "Checking",
        "Credit Card",
        "school"
        ],
        required:true,
    },
    color:{
        type:String,
    },

   
    notes:{
        type:string,
        required:true,
    },

},
    {
    timestamps:true,
    toJSON:{virtuals:true},
    }
);


// model


const Account = mongoose.Model('Transaction', transactionSchema);


module.exports= Transaction;