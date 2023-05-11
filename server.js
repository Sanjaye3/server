const express = require('express');
require ('C:\\Users\\sanja\\OneDrive\\Desktop\\New folder\\income expense tracker\\server\\config\\dbConnect.js')
const usersRoute = require('C:\\Users\\sanja\\OneDrive\\Desktop\\New folder\\income expense tracker\\server\\routes\\users\\usersRoute.js');
const accountRoute = require('C:\\Users\\sanja\\OneDrive\\Desktop\\New folder\\income expense tracker\\server\\routes\\account\\accountRoute.js')
const transactionsRoute= require('C:\\Users\\sanja\\OneDrive\\Desktop\\New folder\\income expense tracker\\server\\routes\\transactions\\transactionRoute.js')
const globalErrHandler= require('C:\\Users\\sanja\\OneDrive\\Desktop\\New folder\\income expense tracker\\server\\middlewares\\globalErrHandler.js');

const app = express();


const userRoute = require('C:\\Users\\sanja\\OneDrive\\Desktop\\New folder\\income expense tracker\\server\\routes\\users\\usersRoute.js')
usersRoute;
// listen to server


const PORT = process.env.PORT || 9000;

app.listen(PORT, console.log("server is running"));


// middlewares
app.use(express.json())



// routes


// users route

// post/api/v1/users/register

app.use('/api/v1/users/',usersRoute)
 
// account routes

app.use('/api/v1/accounts', accountRoute);





// transactions route 
app.use('/api/v1/transactions', transactionsRoute);


// delete/api/v1/transactions/:id  
// app.delete('/api/v1/transactions/:id', async(req, res) =>{
//     try{
//         res.json({msg: 'Delete transactions route'});
//     }
//     catch(error){ 
//         res.json(error)
//     }
// })


// Error handlers

// just passing the error handler as a parameter
app.use(globalErrHandler);




