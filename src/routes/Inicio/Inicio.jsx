
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardProd from '../../components/CardProd/CardProd';
import './inicio.css'
const Inicio = () => {
    const [prod, setProd] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then(setProd)
    }, [])
   
    return <CardProd>
        <div className="prodCard">
            {prod.map((product) => {
                const id = product.id
                return <div className="CardProdCont">
                    <img src={product.image} alt={product.title} className="imageProd" />
                    <p className="prodTitle">{product.title} </p>
                    <p className="prodName">{product.price}</p>
                    <Link to={`/${id}`} className="detalles">VER MAS DETALLES</Link>
                </div>
            })}
        </div>
    </CardProd>
}
export default Inicio;