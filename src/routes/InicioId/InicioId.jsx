import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../../components/ItemCount/ItemCount";
import './inicioId.css'

const ProdId = () => {
    const { id } = useParams();
    const [prod, setProd] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then(setProd)
    }, [id]);

    return <div className="detailProd">
        <img src={prod.image} alt={prod.title} className="imageInicioId"/>
        <p className="prodTitle">{prod.title} </p>
        <p className="descInicioId">{prod.description} </p>
        <ItemCount/>
    </div>

}
export default ProdId;  