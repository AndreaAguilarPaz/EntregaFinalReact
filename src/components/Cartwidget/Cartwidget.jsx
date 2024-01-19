//import carrito from '../../assets/imgs/carrito.png'
import { useContext } from 'react'
import cartIcon from '../../assets/cart.svg'
import {Link} from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const CartWidget =()=>{
  const { itemsInCart} = useContext (CartContext)

  return (
    <Link to= "/cart" className='flex items-center gap-1 cursor-pointer'>
      <img src={cartIcon} alt='Cart icon' className=" w-8 text-blue-500"></img>
      <span className='text-white'> {itemsInCart()} </span>
    </Link>
  )
}

export default CartWidget


