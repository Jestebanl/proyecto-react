/* eslint-disable react/prop-types */
import './CestaCards.css'


function CestaCards({ producto, removeFromCart }) {

  return (

    <div className="product" key={producto.id}>
      <img src={producto.img} alt={producto.titulo} className='img' />
      <div>
        <span>{producto.titulo}</span>
      </div>
      <label className="price small">{producto.coste}€</label>
      <button onClick={() => removeFromCart(producto.id)} className="remove-button">
      </button>


    </div>
  )
}

export default CestaCards