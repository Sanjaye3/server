const express = require('express');
const {createTransCtrl,getTransCtrl,getTransidCtrl,deleteTransCtrl,updateTransCtrl } = require('C:\\Users\\sanja\\OneDrive\\Desktop\\New folder\\income expense tracker\\server\\controllers\\transactions\\transactionCtrl.js');


const transactionRoute = express.Router();

// post/api/v1/transactions/
transactionRoute.post('/', createTransCtrl)




// get/api/v1/transactions/ 
transactionRoute.get('/',getTransCtrl )


// get/api/v1/transactions/:id  
transactionRoute.get('/:id', getTransidCtrl)

// delete/api/v1/transactions/:id  
transactionRoute.delete('/:id',deleteTransCtrl)


// update/api/v1/transactions/:id  
transactionRoute.put('/:id', updateTransCtrl )










module.exports = transactionRoute;