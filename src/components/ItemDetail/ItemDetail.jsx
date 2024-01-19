import { useContext, useState } from "react"
import { Boton } from "../../utils/boton"
import { QuantitySelector } from "./quantitySelector"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

export const ItemDetail =( {articulo})=> {

    const [cantidad,setCantidad] = useState(1)
    const {addToCart, isInCart} = useContext (CartContext)   

    
    

    const handleAgregar =() => {
        const itemToCart={
            ...articulo,
            cantidad
        }
        
        addToCart(itemToCart)
    }

    return(
        <div className="px-40  justify-items-centercontainer m-auto mt-8  gap-3 ">
            <h4 className=' text-3xl font-semibold p-5'>{articulo.nombre}</h4>
            <img className=" w-80 h-70 p-3"src={articulo.imagen} alt={articulo.nombre}/>
            
            <p className=" p-3">{articulo.descripcion}</p>
            <p className=' font-bold'>Precio: $ {articulo.precio}</p>


            {
                isInCart(articulo.id)
                ? <Boton className=" bg-green-300 rounded-full" ><Link to="/cart ">Ir al carrito</Link> </Boton>
                : <>
                        <QuantitySelector
                            cantidad={cantidad}
                            stock={articulo.stock}
                            setCantidad={setCantidad}
                        />
            
                    
                        <Boton onClick={handleAgregar} className="bg-green-300 rounded-full" >Agregar al carrito</Boton>
                    </>
            }
            

            
        </div>
    )
}