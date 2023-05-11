const mongoose = require('mongoose');


const dbconnect = async () => { 
    try {
        await mongoose.connect("mongodb+srv://sanjaye:SanjayeHere@cluster0.hrmbdz1.mongodb.net/?retryWrites=true&w=majority");
        console.log("db connected");
     }
    catch (error){
        console.log(error);
    }
}



dbconnect();