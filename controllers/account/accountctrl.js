// create account
const createAccCtrl=async(req, res) =>{
    try{
        res.json({msg: 'create account route'});
    }
    catch(error){ 
        res.json(error)
    }
}

// get single account route
const getAccIdCtrl=async(req, res) =>{
    try{
        res.json({msg: 'get single account route'});
    }
    catch(error){ 
        res.json(error)
    }
}

const getAccCtrl=async(req, res) =>{
    try{
        res.json({msg: 'get account route'});
    }
    catch(error){ 
        res.json(error)
    }
}


const deleteAccCtrl=async(req, res) =>{
    try{
    res.json({msg: 'delete account route'});
}
catch(error){ 
    res.json(error)
}}


const updateAccCtrl=async(req, res) =>{ 
    try{
    res.json({msg: 'update account route'});
}
catch(error){ 
    res.json(error)
}}




module.exports={createAccCtrl,getAccCtrl,getAccIdCtrl,deleteAccCtrl,updateAccCtrl}