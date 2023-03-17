const profileModel=require("../models/profileModel");
var jwt = require('jsonwebtoken');

exports.CreateProfile=(req,res)=>{
    let reqBody=req.body;
    profileModel.create(reqBody,(err,data)=>{
        if(err){
            res.status(400).json({Status:"fail",data:err})
        }
        else{
            res.status(200).json({Status:"success",data:data})
        }
    })
}


exports.UserLogin=(req,res)=> {
    let UserName = req.body['UserName'];
    let Password = req.body['Password'];

    profileModel.find({UserName:UserName,Password:Password},(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            if (data.length>0) {


                //Create auth token
                let Payload={exp: Math.floor(Date.now() / 1000) + (24*24*60 * 60), data:data[0]}
                let token = jwt.sign( Payload,'SecretKey123456789');


                res.status(200).json({status: "success",token:token, data: data});
            } else {
                res.status(401).json({status: "Unauthorized"})
            }
        }
     })




}


exports.selectProfile=(req,res)=> {

    let UserName=req.headers['username']

    profileModel.find({UserName:UserName,},(err,data)=>{
        if(err){
            res.status(400).json({Status:"fail",data:err})
        }
        else{
            res.status(200).json({Status:"success",data:data})
        }

    })
}


exports.UpdateProfile=(req,res)=> {

    let UserName=req.headers['username']
    let reqBody=req.body;

    profileModel.updateOne({UserName:UserName},{set:reqBody},{upsert:true},(err,data)=>{
        if(err){
            res.status(400).json({Status:"fail",data:err})
        }
        else{
            res.status(200).json({Status:"success",data:data})
        }
    })




}