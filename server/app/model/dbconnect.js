import 'dotenv/config'
import mongoose from "mongoose";
export const dbconnect=()=>{
    mongoose.connect(process.env.DBURL,{
        passphrase:true 
     }).then(()=>{
        console.log("db conntected");
        
     })
}