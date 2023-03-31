const  express=require('express');
const router=require('./src/route/api')
const app=new express();
const bodyParser=require('body-parser');


//security middleware

const rateLimit=require('express-rate-limit');
const  helmet=require('helmet');
const mongoSanitize=require('express-mongo-sanitize');
const xss=require('xss-clean');
const hpp=require('hpp');
const cors=require('cors');



//Database
const mongoose=require('mongoose');


//Security Middleware
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp())


//Body perser
app.use(bodyParser.json())

//Rate Limiter
const limiter=rateLimit({windowMs:15*60*100,max:300})

//Database


//Managing FontEnd  Routing
app.use(express.static('client/build'))
app.get("*",function (req,res) {
    req.sendFile(path.resolve(__dirname,'client','build','index.html'))
})


//Managing BackEnd api Routing
app.use("/api/v1",router)

module.exports=app;


