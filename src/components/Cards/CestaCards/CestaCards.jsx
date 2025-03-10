import './CestaCards.css'

function CestaCards({id, img, titulo, coste, removeFromCart}) {
  return (
    <div className="products">
      <div className="product">
        <img src={img} alt={titulo} className='img' />
        <div>
          <span>{titulo}</span>
        </div>
        <label className="price small">{coste}</label>
        <button onClick={() => removeFromCart(id)} className="eliminar" type="reset">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="black" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
      </div>
    </div>
  )
}

export default CestaCards