import mongoose from "mongoose";
const dataSchema= new mongoose.Schema({
    name:{
        type:String,
       
        
    },
    email:{
        type:String,
       

    } 
},{
    timestamps:{createdAt:"createtime",updatedAt:"updatetime"}
})

 const dataMODEL=mongoose.model("subhajit",dataSchema);
 export default  dataMODEL;