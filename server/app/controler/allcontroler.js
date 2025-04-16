import dataMODEL from "../model/databasemodel.js";

export const getcontroller= async(req,res)=>{
   
 
    console.log(`${process.env.DBURL}`);
    const dataall= await dataMODEL.find();
    console.log('get req');
    
    res.send(dataall)
     
 } 
 export const postcontroller= async(req,res)=>{
    const {name,email}=req.body
    console.log({name,email});
    
 
   await dataMODEL.create({name,email})
    res.send("hey") 
 
 }

 export const deletecontroller= async(req,res)=>{
    const {id}=req.params;
    await dataMODEL.deleteOne({_id:id})
    res.send(id)
 
 }       

 export const updatecontroller= async(req,res)=>{
    const id=req.params.id;
    const {name,email}=req.body;
    const objecta={
        name,
        email
    }
    await dataMODEL.updateOne({_id:id},objecta)
    res.send("update done")
 }

export const singledata= async (req,res)=>{
const id=req.params.id;
const data = await dataMODEL.findOne({_id:id})
res.send(data)
} 