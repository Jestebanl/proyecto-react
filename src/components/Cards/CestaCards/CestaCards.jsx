import './CestaCards.css'

function CestaCards({id, img, titulo, coste, removeFromCart}) {
  const props = {img, titulo, coste}
  return (

    <div className="product" key={id}>
      <img src={props.img} alt={props.titulo} className='img' />
      <div>
        <span>{props.titulo}</span>
      </div>
      <label className="price small">{props.coste}</label>
      <button onClick={() => removeFromCart(id)} className="remove-button">Remove</button>
    </div>
  )
}

export default CestaCards