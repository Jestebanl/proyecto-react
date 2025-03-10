import ProductosData from "../../../data/productos.json"
import ProductosCards from "../../Cards/ProductosCards/ProductosCards"
import './Productos.css'

function Productos({addToCart}) {
  const addToCesta = producto => {
    addToCart(producto)
  }
  return (
    <section className="producto">
      {ProductosData.map((producto) => (
        <ProductosCards
          key = {producto.id}
          img={producto.img}
          titulo={producto.titulo}
          texto={producto.texto}
          coste={producto.coste}
          addToCart={addToCesta}
        />
      ))}
    </section>
  )
}

export default Productos