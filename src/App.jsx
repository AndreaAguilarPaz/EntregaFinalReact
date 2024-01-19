
import './App.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter , Routes, Route} from "react-router-dom";
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import { CartView } from './components/CartView/CartView';
import { CheckOut } from './components/CheckOut/CheckOut';


function App() {
  
  return (
    <CartProvider className="body">
      <BrowserRouter  >

        <Navbar/> 
        <Routes>
          <Route path="/" element = {<ItemListContainer/>}/>
          <Route path="/productos/:categoriaId" element = {<ItemListContainer/>}/>
          <Route path="/articulo/:articuloId" element = {<ItemDetailContainer/>}/>
          <Route path="/cart" element ={<CartView />}/>
          <Route path="/checkout" element ={<CheckOut />}/>

        </Routes> 

     
      </BrowserRouter>

   
    </CartProvider>
  )
}

export default App
