const express = require('express');
const  {registerUserCtrl,userLoginCtrl,userProfileCtrl,deleteUserCtrl,updateUserCtrl} = require('C:\\Users\\sanja\\OneDrive\\Desktop\\New folder\\income expense tracker\\server\\controllers\\users\\usersCtrl.js')


const usersRoute = express.Router();


// post/api/v1/users/register

usersRoute.post ('/register',registerUserCtrl)


// post/api/v1/users/login


usersRoute.post('/login',userLoginCtrl)

// get/api/v1/users/profile/:id

usersRoute.get('/profile/:id',userProfileCtrl)

// delete/api/v1/users/profile/:id


usersRoute.delete('/:id', deleteUserCtrl)


// usersRoute.put()


usersRoute.put('/:id', updateUserCtrl)

module.exports = usersRoute
