const express = require('express');
const {createAccCtrl,getAccCtrl,deleteAccCtrl,updateAccCtrl,getAccIdCtrl} = require('C:\\Users\\sanja\\OneDrive\\Desktop\\New folder\\income expense tracker\\server\\controllers\\account\\accountctrl.js')


const accountRoute = express.Router();



// post/api/v1/accounts
accountRoute.post('/',createAccCtrl)

// get/api/v1/accounts/:id  
accountRoute.get('/:id',getAccIdCtrl)

// delete/api/v1/accounts/:id  

accountRoute.delete('/:id',deleteAccCtrl)


// put/api/v1/accounts/:id 
accountRoute.put('/:id',updateAccCtrl)

// get/api/v1/accounts  
accountRoute.get('/', getAccCtrl)











module.exports = accountRoute