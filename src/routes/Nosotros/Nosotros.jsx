import "./nosotros.css"
import cajas from "../../imagenes/cajas.jpg"
import contact from "../../imagenes/contact.png"
import contact01 from "../../imagenes/contact01.jpg"
const Nosotros = () => {
    return <div className="contNosotros">
        <h1>Nosotros</h1>
        <p>MAXXIS es el eCommerce líder en Latinoamérica , que reúne en una sola plataforma online el catálogo de productos ,también es una tienda en línea intuitiva y un servicio completo de envíos internacionales y atención al usuario, para que la experiencia al comprar y recibir productos del exterior sea cómoda, segura y simple.
        </p>
        <img src={cajas} alt="holamundo"></img>
        <h1>¿Cuáles son los beneficios de MAXXIS?</h1>
        <p>MAXXIS brinda diferentes beneficios gracias a su modelo de negocio, a las características propias del eCommerce Crossborder y a su propuesta de valor.
            En primer lugar, la variedad de productos. La plataforma online reúne el catálogo  de productos originales y nuevos , todo en un solo lugar. Las mejores marcas de prestigio internacional, en una inmensa variedad de colores y modelos, y en todos los talles, medidas y formatos.
            Otro beneficio de Tiendamia es la facilidad de compra. Comprar en el exterior se vuelve simple, en pocos pasos, desde una sola plataforma transparente e intuitiva, sin utilizar boxes, casilleros o intermediarios, visualizando todo en tu idioma y en tu moneda.
        </p>
        <img src={contact} alt="holamundo"></img>
        <h1>La historia de MAXXIS</h1>
        <p>Este fue el estímulo que empujó  a soñar con una plataforma online completa que permita acceder a productos con un servicio fácil que te los traiga.

            ¡Así nace  MAXXIS! Un pequeño equipo en una pequeña oficina , llevando a cabo un gigantesco desafío: brindar acceso sin fronteras a bienes de consumo igualando las posibilidades de compra en los distintos países del mundo.
        </p>
        <img src={contact01} alt="holamundo"></img>
        

    </div>
}
export default Nosotros;