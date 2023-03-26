import { useState } from "react";
import "./itemCount.css"
import { Link } from 'react-router-dom';
const ItemCount = () => {

    const [conta, setConta] = useState(0);

    const clickHandler = () => {
       return setConta(conta + 1);
    };
    const clickHandlerResta = () => {
        return conta > 0 ? setConta(conta - 1) : '';
    };
   
    return (
        <div className="cont">
            <button onClick={clickHandlerResta}>-</button>
            {conta}
            <button onClick={clickHandler}>+</button>
            <button><Link to="/CartWidget" className="datos">Agregar al Carrito</Link></button>
        </div>
    );

}
export default ItemCount;