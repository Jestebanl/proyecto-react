/* eslint-disable react/prop-types */
import CestaCards from "../../Cards/CestaCards/CestaCards";
import "./Cesta.css";

function Cesta({ cesta, removeFromCart }) {
  const borrarElemento = (id) => {
    removeFromCart(id);
  };

  console.log(cesta);
  // Calcular el total de la cesta
  const total = cesta.reduce((acc, producto) => acc + producto.coste, 0);

  return (
    <div className="cesta-container">
      <label className="title"><strong>Carrito de la compra</strong></label>
      <div className="products">
        {cesta.map((producto) => (
          <CestaCards
            key={producto.id}
            id={producto.id}
            img={producto.img}
            titulo={producto.titulo}
            coste={producto.coste}
            removeFromCart={borrarElemento}
          />
        ))}
      </div>
      
      {/* Caja de total */}
      <div className="total-box">
        <strong>Total: </strong> {total.toFixed(2)}€
      </div>
    </div>
  );
}

export default Cesta;
