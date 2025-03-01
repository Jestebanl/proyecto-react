//import { useState } from 'react'
import producto1Depi from '/img/producto1Depi.png'
//import viteLogo from '/vite.svg'
import './App.css'
import Productos from './componentes/Productos/Productos'

function App() {

  return (
    <Productos
      img={producto1Depi}
      titulo="Tarjeta Regalo"
      texto="Si no sabes que regalar, una tarjeta regalo puede ser tu mejor decision para esa persona tan especial."
      coste="29.99€"
    />
  )
}

export default App
