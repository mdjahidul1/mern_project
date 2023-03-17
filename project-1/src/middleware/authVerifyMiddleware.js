var jwt = require('jsonwebtoken');
const {ER_USERNAME} = require("mysql/lib/protocol/constants/errors");


module.exports=(req,res,next)=>{

     let Token=req.headers['token-key']
    jwt.verify(Token,"SecretKey123456789",function (err,decoded){
        if(err){
            res.status(401).json({status: "Unauthorized"})
        }
        else {
            //Get User Name from decoded token & add with req header
            let username=decoded['data']['UserName'];
            req.headers.username=username
            next();
        }
    })

}