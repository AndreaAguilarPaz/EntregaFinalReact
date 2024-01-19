import { Boton } from "../../utils/boton"


export const QuantitySelector =({cantidad, stock, setCantidad})=>{
    const handleSumar = () =>{
        cantidad < stock && setCantidad(cantidad +1)
    }

    const handleRestar =()=> {
        cantidad >1 && setCantidad ( cantidad -1)
    }

    return(
        <div className="flex gap-3 items-center">
                <Boton className="bg-green-300 rounded-full font-semibold " onClick={handleRestar}>-</Boton>
                <span className="font-semibold">{cantidad}</span>
                <Boton className="bg-green-300 rounded-full font-semibold "onClick={handleSumar}>+</Boton>
            </div>
    )
}