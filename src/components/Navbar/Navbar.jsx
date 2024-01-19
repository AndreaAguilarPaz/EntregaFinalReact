import './Navbar.css';
import logo from '../../assets/imgs/logo.jpg';
import { Link } from "react-router-dom";
import CartWidget from "../Cartwidget/Cartwidget";

export const Navbar = ()=>{
    return (
        <header className="headerContainer">
            <div className="header space-x-2 ">
                <Link to="/"><img src={logo} alt="logo" className="w-20 h-20 rounded-full p-1 " /></Link>
                <Link to="/"><h1 className="brand text-xl font-bold">PLINA BEBE</h1></Link>
                <nav className="navbar">
                    
                    
                    <Link to={"/"} className="p-5 text-white hover:text-yellow">Todos los productos</Link>

                    <Link to={"/productos/cunas"} className="p-5 text-white hover:text-yellow">Cunas</Link>

                    <Link to="/productos/MueblesDeBebe" className="p-5 text-white hover-text-yellow"> Muebles de Bebe</Link>

                    <Link to="/productos/Juguetes" className="p-5 text-white hover:text-yellow"> Juguetes</Link>
                    
                    
                    
                    <CartWidget></CartWidget>
                </nav>
                
            </div>
        </header>
    )
    
}

export default Navbar