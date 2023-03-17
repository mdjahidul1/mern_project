const toDoListModel=require("../models/toDoListModel");
const profileModel = require("../models/profileModel");


exports.CreateToDo=(req,res)=>{
    let reqBody=req.body;

    let TodoSubject=reqBody['TodoSubject']
    let TodoDescription=reqBody['TodoDescription']
    let UserName=req.headers['username']
    let TodoStatus="New"
    let TodoCreateDate=Date.now();
    let TodoUpdateDate=Date.now();
    let PostBody={
        UserName:UserName,
        TodoSubject:TodoSubject,
        TodoDescription:TodoDescription,
        TodoStatus:TodoStatus,
        TodoCreateDate:TodoCreateDate,
        TodoUpdateDate:TodoUpdateDate
    }

    toDoListModel.create(PostBody,(err,data)=>{
        if(err){
            res.status(400).json({Status:"fail",data:err})
        }
        else{
            res.status(200).json({Status:"success",data:data})
        }
    })
}


exports.SelectToDo=(req,res)=> {

    let UserName=req.headers['username']

    toDoListModel.find({UserName:UserName},(err,data)=>{
        if(err){
            res.status(400).json({Status:"fail",data:err})
        }
        else{
            res.status(200).json({Status:"success",data:data})
        }

    })
}


exports.UpdateToDo=(req,res)=> {
       let TodoSubject=req.body['TodoSubject']
       let TodoDescription=req.body['TodoDescription']
       let _id=req.body['_id']
       let TodoUpdateDate=Date.now();
       let PostBody={
           TodoSubject:TodoSubject,
           TodoDescription:TodoDescription,
           _id:_id,
           TodoUpdateDate:TodoUpdateDate
       }
       toDoListModel.updateOne({_id:_id},{$set:PostBody},{upsert:true},(err,data)=>{
           if(err){
               res.status(400).json({Status:"fail",data:err})
           }
           else{
               res.status(200).json({Status:"success",data:data})
           }
       })

}


exports.UpdateStatusToDo=(req,res)=> {
    let TodoStatus=req.body['TodoStatus']
    let _id=req.body['_id']
    let TodoUpdateDate=Date.now();
    let PostBody={
        TodoStatus:TodoStatus,
        TodoUpdateDate:TodoUpdateDate
    }
    toDoListModel.updateOne({_id:_id},{$set:PostBody},{upsert:true},(err,data)=>{
        if(err){
            res.status(400).json({Status:"fail",data:err})
        }
        else{
            res.status(200).json({Status:"success",data:data})
        }
    })

}


exports.RemoveToDo=(req,res)=> {

    let _id=req.body['_id']

    toDoListModel.remove({_id:_id},(err,data)=>{
        if(err){
            res.status(400).json({Status:"fail",data:err})
        }
        else{
            res.status(200).json({Status:"success",data:data})
        }
    })

}


exports.SelectToDoByStatus=(req,res)=> {

    let UserName=req.headers['username']
    let TodoStatus=req.body['TodoStatus']

    toDoListModel.find({UserName:UserName,TodoStatus:TodoStatus},(err,data)=>{
        if(err){
            res.status(400).json({Status:"fail",data:err})
        }
        else{
            res.status(200).json({Status:"success",data:data})
        }

    })
}


exports.SelectToDoByDate=(req,res)=> {

    let UserName=req.headers['username']
    let FormDate=req.body['FormDate']
    let ToDate=req.body['ToDate']

    toDoListModel.find({UserName:UserName,TodoCreateDate:{$gte:new Date(FormDate),$lte:new Date(ToDate)}},(err,data)=>{
        if(err){
            res.status(400).json({Status:"fail",data:err})
        }
        else{
            res.status(200).json({Status:"success",data:data})
        }

    })
}