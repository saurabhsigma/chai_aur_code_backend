require('dotenv').config({path: './env'})
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";



connectDB()







import  express  from "express";

const app = express()

;( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("Error: ",error);
            throw error;
        })

        app.listen(process.env.PORT, ()=>{
            console.log("App is running...")
        }) 
    } catch(error){
        console.error("ERROR: ", error)
        throw err
    }
})()