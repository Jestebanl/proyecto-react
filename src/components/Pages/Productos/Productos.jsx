import ProductosData from "../../../data/productos.json"
import ProductosCards from "../../Productos/ProductosCards"
import './Productos.css'

function Productos() {
  return (
    <section className="producto">
      {ProductosData.map((producto) => (
        <ProductosCards
          key = {producto.id}
          img={producto.img}
          titulo={producto.titulo}
          texto={producto.texto}
          coste={producto.coste}
        />
      ))}
    </section>
  )
}

export default Productos