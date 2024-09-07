import express from 'express';
import dotenv from "dotenv";
import connectDB from "./db/db.js";
const app = express();
dotenv.config({
    path:'./env'
})

connectDB()

.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running on PORT:${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("MONGODB connection failed!...",error)
})
