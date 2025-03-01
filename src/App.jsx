//import { useState } from 'react'
import ProductosData from './data/productos.json'
//import viteLogo from '/vite.svg'
import './App.css'
import Productos from './components/Productos/ProductosCards'

function App() {

  return (
    ProductosData.map((producto) => (
      <Productos
        key = {producto.id}
        img={producto.img}
        titulo={producto.titulo}
        texto={producto.texto}
        coste={producto.coste}
      />
    ))
  )
}

export default App
