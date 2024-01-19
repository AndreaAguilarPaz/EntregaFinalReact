import { ItemCard } from "../ItemCard/ItemCard"



export const ItemList =({productos})=> {
    return (
        <section className="container m-auto mt8">
            <h3 className='text-2xl font-bold py-4'> Productos </h3>
            <div className='flex flex-wrap justify-center gap-8 items-center' >
                {productos && productos.map((articulo)=> (
                    <ItemCard key={articulo.id} articulo={articulo}/>
                    ))}
            </div>
            
                       

        </section>
    )
}