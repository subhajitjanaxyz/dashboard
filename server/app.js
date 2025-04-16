import express from "express";
import 'dotenv/config'
import { allroute } from "./app/route/allroute.js";
import { dbconnect } from "./app/model/dbconnect.js";
import cors from "cors"
const app= express();
app.listen(process.env.PORT);
dbconnect()


app.use(express.json())
app.use(cors())
app.use("/api",allroute)
   
   


 