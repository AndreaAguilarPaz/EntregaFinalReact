import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { db } from "../../firebase/config"
import { collection, addDoc } from "firebase/firestore"

export const CheckOut =()=> {

    const {cart, totalCart, clearCart}=useContext(CartContext)
    
    const [values,setValues]=useState({
        nombre:'',
        mail:'',
        telefono:'',
        direccion:'',
        localidad:'',
        codigoPostal:'',
    })

    const [orderId,setOrderId]= useState()

    const handleInputChange=(e)=> {
        

        setValues({
            ...values,
            [e.target.name]:e.target.value
        })
    }
 
    const handleSubmit =(e)=>{
        e.preventDefault()
        

        const orden= {
            cliente: values,
            items: cart,
            total: totalCart(),
            fecha: new Date ()
        }
        
        const ordersRef= collection(db, 'orders')
        addDoc(ordersRef,orden)
            .then( (doc)=> {setOrderId (doc.id)})
            clearCart()
    }
    
    if (orderId){
        return (<div className="container m-auto mt-10 px-8">
            <h2 className="text-xl font-semibold py-4">Gracias por tu compra!</h2>
            <h3> Tu código de compra es: {orderId}</h3>
        </div>)

    }

    return (
        <div className="container m-auto mt-10 px-5">
            <h2 className="text-xl font-semibold py-4">Ingresa tus datos:</h2>
            <form onSubmit={handleSubmit} className="flex  flex-col gap-4 max-w-md">
                <input className="rounded-full border P-2"type="text" placeholder="Nombre y Apellido" value= {values.nombre} onChange={handleInputChange} name="nombre"></input>
                <input className="rounded-full border P-2"type="mail" placeholder="e-mail" value= {values.mail} onChange={handleInputChange} name="mail"></input>
                <input className="rounded-full border P-2"type="number" placeholder="Teléfono" value= {values.telefono} onChange={handleInputChange} name="telefono"></input>
                
            
            
            <h2  className="text-xl font-semibold py-4">Dirección de envío</h2>
            
                
                <input className="rounded-full border P-2"type="text" placeholder="Dirección"value= {values.direccion} onChange={handleInputChange}name= "direccion"></input>
                <input className="rounded-full border P-2"type="text" placeholder="Localidad"value= {values.localidad} onChange={handleInputChange}name="localidad"></input>
                <input className="rounded-full border P-2"type="number" placeholder="Codigo Postal" value= {values.codigoPostal} onChange={handleInputChange} name="codigoPostal"></input>

                <button type="submit" className="bg-green-200  rounded-full">Enviar</button>  
            </form>
            
        </div>
    )
}