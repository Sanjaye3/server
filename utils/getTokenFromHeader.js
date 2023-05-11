const getToken= (req, res) =>{

const headerObj=req.headers;
const token =headerObj["authorization"].split(" ")[1];
if(token !== undefined){
    return token
    } else {
    return{
        status:"failed",
        msg:"there is no token attached to the header",
    }
}

}

module.exports=getTokenFromHeader;