const User = require("C:\\Users\\sanja\\OneDrive\\Desktop\\New folder\\income expense tracker\\server\\model\\User.js");
const bcrypt = require("bcryptjs");
const {AppErr,appErr} = require("C:\\Users\\sanja\\OneDrive\\Desktop\\New folder\\income expense tracker\\server\\utils\\appErr.js");
const generateToken = require("C:\\Users\\sanja\\OneDrive\\Desktop\\New folder\\income expense tracker\\server\\utils\\generateToken.js");
const verifyToken= require("C:\\Users\\sanja\\OneDrive\\Desktop\\New folder\\income expense tracker\\server\\utils\\verifyToken.js");
// register
const registerUserCtrl= async(req, res,next) =>{
    const {fullname,password,email} = req.body
    try{
        // check if email exists
        const userFound= await User.findOne({email})
        if(userFound) {
            // return next (new Error("user alreadddy exists"));
            return next(appErr("user alreadddy exists",400));
        }

        // check if field is empty
        // if(!email || !fullname || !password) {
        // return res.json({message:"please provide the fields"})
        // }


        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);


        // create user

        const user = await User.create({
            fullname,
            email,
            password: hashedPassword,
        })

        res.json({status:success,
        fullname: user.fullname,
        email: user.email,
        });
    }
    catch(error){ 
        // the below code is  for what todo with the error
        next(new Error(error));
    }
}


// login

const userLoginCtrl=  async(req, res,next) =>{
    const{email,password} = req.body
    try{
        // check if email exists
        const userFound = await User.findOne({email})
        if(!userFound) return res.json({message: "Email not found"})
        // check for password validity
        const isPasswordMatch= await bcrypt.compare(password,userFound.password);
        if(!isPasswordMatch)
        // return res.json({msg:"Invalidlogin credentials"})
        return next(new Error("invalid login credentials"));


        res.json({status:"success",
            fullname:userFound.fullname,
            id:userFound.id,
            message:"Login successful",
            token:generateToken(userFound._id)
        });
    }
    catch(error){ 
        res.json(error)
    }
};


// profile
const userProfileCtrl = async(req, res) =>{
//    how to get the token from the header

const headerObj=req.headers;
const token =headerObj["authorization"].split(" ")[1];
// console.log(token);
const result = verifyToken(token);
console.log(result);
// to take the values from the headers 
// console.log(req.headers);




    // the below code passing the token to verifytoken function
    // const result = verifyToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTIwMzcxYmUxNzJlZmMzMGRkZDIwNiIsImlhdCI6MTY4MzE4MDk1MSwiZXhwIjoxNjg0MDQ0OTUxfQ.OrhIOjYC066hZs6sLgiexNSAGj1H4JQLzj2-Mt34lfk');
    // console.log(result); 
    try{
        res.json({msg: 'Profile routeee'});
    }
    catch(error){ 
        res.json(error)
    }
}


// delete

const deleteUserCtrl = async(req, res) =>{
    try{
        res.json({msg: 'Delete route'});
    }
    catch(error){ 
        res.json(error)
    }
}


// update
const updateUserCtrl = async(req, res) =>{try{
    res.json({msg: 'Update route'});
}
catch(error){ 
    res.json(error)
}}


module.exports = {registerUserCtrl,userLoginCtrl,userProfileCtrl,deleteUserCtrl,updateUserCtrl};