import ProductosData from "../../../data/productos.json"
import ProductosCards from "../../Cards/ProductosCards/ProductosCards"
import './Productos.css'

function Productos({addToCart, removeFromCart, busqueda}) {
  const addToCesta = producto => {
    addToCart(producto)
  }

  const removeFromCesta = producto => {
    removeFromCart(producto)
  }

  const getCards = () => { 
    if(busqueda === ''){
      return ProductosData.map((producto) => (
        <ProductosCards
          key = {producto.id}
          img={producto.img}
          titulo={producto.titulo}
          texto={producto.texto}
          coste={producto.coste}
          addToCart={addToCesta}
        />
      ))
    }
    else{
      return ProductosData.filter(producto => producto.titulo.toLowerCase().includes(busqueda.toLowerCase())).map((producto) => (
        <ProductosCards
          key = {producto.id}
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