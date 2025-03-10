import './CestaCards.css'

function CestaCards(props) {
  return (

    <div className="product">
      <img src={props.img} alt={props.titulo} className='img' />
      <div>
        <span>{props.titulo}</span>
      </div>
      <label className="price small">{props.coste}</label>

    </div>
  )
}

export default CestaCards