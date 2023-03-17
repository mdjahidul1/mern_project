const mongoose=require('mongoose')
const  dataSchema=mongoose.Schema({
    UserName:{type:String},
    TodoSubject:{type:String},
    TodoDescription:{type:String},
    TodoStatus:{type:String},
    TodoCreateDate:{type:String},
    TodoUpdateDate:{type:String}


},{versionKey:false});
const toDoListModel= mongoose.model('ToList',dataSchema);

module.exports=toDoListModel