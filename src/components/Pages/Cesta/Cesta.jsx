import CestaCards from "../../Cards/CestaCards/CestaCards"
import './Cesta.css'

function Cesta({cesta}) {
  return (
    <div className="card cart">
    <label className="title">Your cart</label>

      {cesta.map((producto) => (
        <CestaCards
          key = {producto.id}
          img={producto.img}
          titulo={producto.titulo}
          coste={producto.coste}
        />
      ))}
    </div>
  )
}

export default Cesta