import { modelo1 } from "../models/alumno.model.js";

modelo1.create({
    name:"el choyas"
});

export const test1 = () => { 
    console.log("si funciona el controlador");
};
