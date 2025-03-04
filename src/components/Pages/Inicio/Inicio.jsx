import ProductosData from "../../../data/productos.json"
import ProductosCards from "../../Productos/ProductosCards"
import './Inicio.css'

function Inicio() {
  return (
    <section className="deseados">
      {ProductosData.filter(producto => producto.deseado === true).map(deseado => (
        <ProductosCards
          key={deseado.id}
          img={deseado.img}
          titulo={deseado.titulo}
          texto={deseado.texto}
          coste={deseado.coste}
        />
      ))}
    </section>
  )
}

export default Inicio