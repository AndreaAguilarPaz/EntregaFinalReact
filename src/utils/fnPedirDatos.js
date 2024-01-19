import { ARTICULOS } from "../data/data"

export const pedirDatos = ()=> {
    return new Promise( (resolve,reject)=>{
        setTimeout(()=> {
             resolve (ARTICULOS)               
        } , 1000)
    })
}