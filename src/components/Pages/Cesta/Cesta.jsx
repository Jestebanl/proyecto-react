import CestaCards from "../../Cards/CestaCards/CestaCards"
import './Cesta.css'

function Cesta({ cesta }) {
  return (
    <div className="cesta-container">
      <label className="title">Your cart</label>
      <div className="products">
        {cesta.map((producto) => (
          <CestaCards
            key={producto.id}
            img={producto.img}
            titulo={producto.titulo}
            coste={producto.coste}
          />
        ))}
      </div>
    </div>
  )
}

export default Cesta