/* eslint-disable react/prop-types */
import ProductosData from "../../../data/productos.json"
import ProductosCards from "../../Cards/ProductosCards/ProductosCards"
import './Productos.css'

function Productos({addToCart, busqueda, toggleCard, idCesta}) {
  const addToCesta = producto => {
    addToCart(producto)
  }

  const toggleCardPopup = producto => {
    toggleCard(producto)
  }

  const getCards = () => { 
    if(busqueda === ''){
      return ProductosData.map((producto) => (
        <ProductosCards
          key={producto.id}
          id={idCesta}
          productoId={producto.id}
          img={producto.img}
          titulo={producto.titulo}
          texto={producto.texto}
          coste={producto.coste}
          addToCart={addToCesta}
          toggleCardPopup={toggleCardPopup}
        />
      ))
    }
    else{
      return ProductosData.filter(producto => producto.titulo.toLowerCase().includes(busqueda.toLowerCase())).map((producto) => (
        <ProductosCards
          key={idCesta}
          id={idCesta}
          productoId={producto.id}
          img={producto.img}
          titulo={producto.titulo}
          texto={producto.texto}
          coste={producto.coste}
          addToCart={addToCesta}
        />
      ))
    }
  }
  return (
    <section className="producto">
      {getCards()}
    </section>
  )
}

export default Productos