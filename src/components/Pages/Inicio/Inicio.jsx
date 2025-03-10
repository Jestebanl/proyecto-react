import ProductosData from "../../../data/productos.json"
import ProductosCards from "../../Cards/ProductosCards/ProductosCards"
import './Inicio.css'

function Inicio({addToCart}) {
  const addToCesta = producto => {
    addToCart(producto)
  }
  return (
    <section className="deseados">
      {ProductosData.filter(producto => producto.deseado === true).map(deseado => (
        <ProductosCards
          key={deseado.id}
          img={deseado.img}
          titulo={deseado.titulo}
          texto={deseado.texto}
          coste={deseado.coste}
          addToCart={addToCesta}
        />
      ))}
    </section>
  )
}

export default Inicio