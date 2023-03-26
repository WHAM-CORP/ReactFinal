import Logo from "../Logo/Logo"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import "./NavBar.css"
import CartWidget from "../CartWitget/CartWidget "
import imagenes from "../../imagenes/image02.webp"
import { Link } from "react-router-dom"
const NavBar = () => {
    return <div className="containerHeader">
        <Logo src={imagenes} alt="holamundo" />
        <ItemListContainer>
            <ol className="menu">
                <li><Link to="/" className="datos">Inicio</Link> </li>
                <li><Link to="/Nosotros" className="datos">Nosotros</Link></li>
                <CartWidget />
            </ol>
        </ItemListContainer>
    </div>
}
export default NavBar;