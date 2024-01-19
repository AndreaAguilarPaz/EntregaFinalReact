import { createContext , useState} from "react";



export const CartContext= createContext ()

export const CartProvider =({children})=>{
    const [cart,setCart] = useState([])
    
  
    const addToCart =(articulo)=> {
      setCart([...cart, articulo])
    }
  
    const isInCart =(id) => {
      return cart.find( articulo => articulo.id ===id)
    }
  
    const clearCart = ()=> {
      setCart([])
    }

    const itemsInCart =()=> {
      return cart.reduce ((acc,articulo)=> acc+ articulo.cantidad , 0   )
    }

    const totalCart=()=> {
      return cart.reduce((acc,articulo)=> acc+(articulo.cantidad *articulo.precio), 0)
    }

    const removeItem =(id)=>{
      setCart(cart.filter (articulo=> articulo.id !==id))
    }

    return(
        <CartContext.Provider value= {{
            cart,
            addToCart,
            isInCart,
            clearCart,
            itemsInCart,
            totalCart,
            removeItem
        }}>
            {children}
        </CartContext.Provider>
    )
}