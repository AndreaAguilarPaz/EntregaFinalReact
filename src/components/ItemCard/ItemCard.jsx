import { Boton } from "../../utils/boton"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { Link } from "react-router-dom"

export const ItemCard = ({articulo})=> {
    return (
        <article  className="box-content  w-55 h-85  shadow-md font-sans bg-green-100 justify-items-center p-8 rounded-lg  bg-blend-hard-light">
            <img className="w-53 h-64 py-2  p-5 "src={articulo.imagen} alt={articulo.nombre}/>
            <h4 className='text-xl font-semibold text-ellipsis overflow-hidden ...'>{articulo.nombre}</h4>
            
            {articulo.stock <= 10 && <p className="font-semibold text-red-500">Quedan pocas unidades!</p>}
            <p className='font-bold py-2'>Precio: $ {articulo.precio}</p>
                    
            <Boton className="bg-emerald-700 rounded-full">
               <Link to = {`/articulo/${articulo.id}` }className="text-white" >Ver más</Link> 
                </Boton>
        </article>
    )
}