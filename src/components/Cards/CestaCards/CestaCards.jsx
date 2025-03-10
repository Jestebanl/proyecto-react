import './CestaCards.css'

function CestaCards(props) {
  return (
    
          <div className="products">
            <div className="product">
              <img src={props.img} alt={props.titulo} className='img'/>
              <div>
                <span>{props.titulo}</span>
              </div>
              {/* <div className="quantity">
                <button>
                  <svg fill="none" viewBox="0 0 24 24" height={14} width={14} xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#47484b" d="M20 12L4 12" />
                  </svg>
                </button>
                <label>2</label>
                <button>
                  <svg fill="none" viewBox="0 0 24 24" height={14} width={14} xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#47484b" d="M12 4V20M20 12H4" />
                  </svg>
                </button>
              </div> */}
              <label className="price small">{props.coste}</label>
            </div>
          </div>
  )
}

export default CestaCards