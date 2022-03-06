require("dotenv").config()
require('./DB/index')
const passport=require('passport')
require('./config/passport')(passport)
const express = require("express")
const cors = require("cors")
// const path =require('path')
const animalsRoute =require('./Route/Animals-Route')
const workerRoute =require('./Route/Workers-Routes')
const userRoute =require('./Route/Users-Routes')
const app = express();
app.use(express.json())
const PORT = 8080;
app.listen(PORT)
app.use(passport.initialize());
app.use(cors()) 
app.use('/Animals',passport.authenticate('jwt',{session:false}),animalsRoute)
app.use('/Workers',passport.authenticate('jwt',{session:false}),workerRoute)
app.use('/User',userRoute)
 
