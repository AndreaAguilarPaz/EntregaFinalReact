
import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'
import { ItemList} from '../../components/ItemList/ItemList'
import { collection, getDocs,query, where } from 'firebase/firestore'
import {db} from "../../firebase/config"


export const ItemListContainer = () => {
    
    const [productos, setProductos] = useState ([])
    
    const [cargando,setCargando] = useState (true)

    const {categoriaId}= useParams()
        
    useEffect(()=>{
        setCargando(true)

        const productosRef= collection( db, 'productos')

        const docsRef= categoriaId
                        ? query (productosRef, where('categoria','==',categoriaId))
                        : productosRef
        
        getDocs( docsRef )
            .then((querySnapshot)=>{
                const docs= querySnapshot.docs.map(doc=> {
                    return{
                        ...doc.data(),
                        id: doc.id
                    }
                })
                

                setProductos(docs)

            })
            .finally(()=> setCargando (false))

    },[categoriaId])
    

    return( 
        <>
            {   cargando ?
                ( <h2 className='text-center text-1xl'> En un ratito vas a poder ver los productos... </h2>)
                : (<ItemList  productos={productos}/>)
            }
        
        </>
    )
}

