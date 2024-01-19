import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Boton } from "../../utils/boton"
import trashIcon from "../../assets/trash.svg"
import { Link } from "react-router-dom";

export const CartView =()=>{
    const {cart, totalCart, clearCart, removeItem} =useContext(CartContext)

    return(
        <section className="container m-auto mt-8">
            {cart.length === 0 ?
                (<>
                <h2 className="font-semibold  text-2xl px-4">El carrito de compras está vacío </h2>
                <Boton className="font-bold text-l px-16  bg-green-200 rounded-full "><Link to={"/"}>Seguir comprando </Link></Boton>
                </>
                )
            :  (<>
                <h2 className="text-3xl font-semibold px-4">Tu compra</h2>
                <hr/>

                <ul className="px-16">
                    {cart.map((articulo) => (
                        <li key={articulo.id} className="flex gap-3 p-5 border-b">
                            <img src={articulo.imagen} 
                                alt="Cart img"
                                className="w-20 p-2 h-20 bg-green-200 rounded-full"
                             />
                            <div>
                                 <h3 className="font-semibold">{articulo.nombre}</h3>
                                <p>Precio por unidad $ {articulo.precio}</p>
                                <p>Cantidad: {articulo.cantidad}</p>
                                <p className="font-bold">Subtotal: $ {articulo.precio * articulo.cantidad} </p>
                                <Boton onClick={() => removeItem(articulo.id)}>
                                    <img src={trashIcon}  className="w-4  bg-green-200 rounded-full" alt="trash icon" />
                                </Boton>
                            </div>
                        </li>
                        ))}
                </ul>
                <h3 className="px-4 font-bold text-3xl">Total: $ {totalCart()}</h3>
                <Boton className= " bg-green-300 rounded-full text-sm " onClick={clearCart}>Vaciar carrito</Boton>
                <Boton className=" px-4 bg-green-300 rounded-full font-semibold"><Link to ="/CheckOut">Finalizar Compra</Link></Boton>
 

                </> )
            }

            

          
        </section>
    )
}