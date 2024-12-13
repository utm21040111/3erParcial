import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { test1 } from "./backend/controllers/alumno.controller.js";

dotenv.config()
mongoose.connect(process.env.urlbd)
.then(()=>{
    console.log("funciona la base de datos")
})
.catch((error)=>{
    console.log("No funciona ya salio", error)
})

const app=express();
app.use(cors());
app.listen(5003, ()=>{
    console.log("se escucha el servidor")
})
test1();

