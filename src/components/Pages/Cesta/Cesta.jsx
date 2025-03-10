import CestaCards from "../../Cards/CestaCards/CestaCards"
import './Cesta.css'

function Cesta({cesta, removeFromCesta}) {
  const removeFromCart = productoId => {
    removeFromCesta(productoId)
  }
  return (
    <div className="card cart">
    <label className="title">Your cart</label>

      {cesta.map((producto) => (
        <CestaCards
          key = {producto.id}
          img={producto.img}
          titulo={producto.titulo}
          coste={producto.coste}
          removeFromCart={removeFromCart}
        />
      ))}
    </div>
  )
}

export default Cesta