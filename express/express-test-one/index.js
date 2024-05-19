const mongoose = require('mongoose');
const express = require('express');
const app = express();
require('dotenv').config();
const userRouter = require('./Router/userRouter.js');


mongoose.connect(process.env.mongoUrl, {}).then(()=>{

    console.log("Database is connected!");

}).catch((err)=>{
    console.log("Database connection error:", err);
})

app.use(express.json());
app.use("/",userRouter)


app.listen(3000, () => {

    console.log("port is connected.")


})

