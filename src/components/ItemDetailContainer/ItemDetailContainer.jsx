import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { db } from "../../firebase/config"
import { doc, getDoc } from "firebase/firestore"

export const ItemDetailContainer =()=> {
    const [cargando, setCargando ] = useState(true)
    const [articulo, setArticulo] = useState (null)

    const {articuloId}= useParams () 

    useEffect (()=> {
        setCargando(true)

        const docRef= doc(db,'productos',articuloId)

        getDoc( docRef)
            .then((docSnapshot)=>{
                const doc={
                    ...docSnapshot.data (),
                    id: docSnapshot.id
                }

            setArticulo (doc)
            })
            .finally(()=> setCargando(false))

    },[articuloId])

    return(
        <div>
          {   cargando ?
                ( <h2 className='text-center text-1xl'> En un ratito vas a poder ver los productos... </h2>)
                : (<ItemDetail articulo={articulo}/>)
            }
        </div>
    )
}