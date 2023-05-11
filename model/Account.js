const mongoose = require('mongoose');



// user schema


const accountSchema = new mongoose.Schema({
    name:{
        type:String,
     required:true,
    },

    accountType:{
        type:String,
        enum:["Savings",
    "Investment",
    "Checking",
    "Credit Card",
    "school"],
        required:true,
    },
    initialBalance:{
        type:Number,
        default:0,
    },
    transactions:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Transaction",
    }
],
    createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
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


const Account = mongoose.Model('User', accountSchema);


module.exports= Account;