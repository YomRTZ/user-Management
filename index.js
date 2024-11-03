const express = require('express')
const mongoose = require('mongoose');
const User =require("./models/user.model.js");
const userRoutes=require("./routes/user.route.js")
const app = express()
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes
app.use('/api/user',userRoutes);

mongoose.connect('mongodb+srv://rediettedila5:a31mKH1Uh8jv7JYX@seniorproject.91pud.mongodb.net/?retryWrites=true&w=majority&appName=SeniorProject')
  .then(() =>{
    console.log('Connected!');
    app.listen(3000,()=>{
        console.log("Server is running on port 3000");
    });
  }).catch(()=>{
    console.log("Connection failed!");
  });