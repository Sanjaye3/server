

// create
const createTransCtrl= async (req, res) => {
    try{
        res.json({msg: 'create ttrrransactions route'});
    }
    catch(error){ 
        res.json(error)
    }
} 


// get 
const getTransCtrl=async(req, res) =>{
    try{
        res.json({msg: 'get transactions route'});
    }
    catch(error){ 
        res.json(error)
    }
}

// get/id


const getTransidCtrl = async(req, res) =>{
    try{
        res.json({msg: 'get transactions route'});
    }
    catch(error){ 
        res.json(error)
    }
}


const deleteTransCtrl =  async(req, res) =>{
    try{
        res.json({msg: 'Delete transactions route'});
    }
    catch(error){ 
        res.json(error)
    }
}


const updateTransCtrl = async(req, res) =>{
    try{
        res.json({msg: 'update transactions route'});
    }
    catch(error){ 
        res.json(error)
    }
}

module.exports={createTransCtrl,getTransCtrl,getTransidCtrl,deleteTransCtrl,updateTransCtrl };