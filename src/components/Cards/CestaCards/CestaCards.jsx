import './CestaCards.css'

// eslint-disable-next-line react/prop-types
function CestaCards({id, img, titulo, coste, removeFromCart}) {
  
  return (

    <div className="product" key={id}>
      <img src={img} alt={titulo} className='img' />
      <div>
        <span>{titulo}</span>
      </div>
      <label className="price small">{coste}</label>
      <button onClick={() => removeFromCart(id)} className="remove-button">Remove</button>
    </div>
  )
}

export default CestaCards