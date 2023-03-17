//Basic

const express=require('express');
const router=require('./src/routes/api');
const app=new express();
const bodyParser=require('body-parser');

//security middleware

const rateLimit=require('express-rate-limit');
const helmet=require('helmet');
const mongoSanitize=require('express-mongo-sanitize');
const xss=require('xss-clean');
const hpp=require('hpp');
const cors=require('cors');


//Database Lib Import
const mongoose=require('mongoose');

//security Middleware Implement
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())

//Body Parser Implement

app.use(bodyParser.json());

//request Rate limit
const limiter=rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter)

//Mongo DB Database Connection
let URI="mongodb://localhost:27017/Todo";
let OPTION={user:'',pass:'',autoIndex:true};
mongoose.connect(URI,OPTION,(error,)=>{
    console.log("connection Success")
    console.log(error)
})
//Routing Implement
app.use("/api/v1",router)

//Undefined Routing Implement
app.use("*",(req,res)=>{
    res.status(404).json({status:"fail",data:"Not Found"})
})

module.exports=app;