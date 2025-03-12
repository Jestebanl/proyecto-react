import ProductosData from "../../../data/productos.json"
import ProductosCards from "../../Cards/ProductosCards/ProductosCards"
import './Inicio.css'

// eslint-disable-next-line react/prop-types
function Inicio({addToCart, toggleCard}) {
  const addToCesta = producto => {
    addToCart(producto)
  }


  return (
    <section className="deseados">
      {ProductosData.filter(producto => producto.deseado === true).map(deseado => (
        <ProductosCards
          key={deseado.id}
          id={deseado.id}
          img={deseado.img}
          titulo={deseado.titulo}
          texto={deseado.texto}
          coste={deseado.coste}
          addToCart={addToCesta}
          toggleCardPopup={toggleCard}
        />
      ))}
    </section>
  )
}

export default Inicio