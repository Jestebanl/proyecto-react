import './Buscador.css'

// eslint-disable-next-line react/prop-types
function Buscador({ buscar }) {
  return (
    <>
      <div className="buscador">
        <form className="form">
          <button>
            <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
              <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" ></path>
            </svg>
          </button>
          <input
            className="input-buscar"
            type="text"
            placeholder="Buscar..."
            onChange={e => buscar(e.target.value)}
          />
          <button onClick={() => buscar('')} className="reset" type="reset">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </form>
      </div>

    </>
  )
}

export default Buscador