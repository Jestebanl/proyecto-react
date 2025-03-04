//import { useState } from 'react'
import { Component } from 'react'
//import ProductosData from './data/productos.json'
//import viteLogo from '/vite.svg'
import './App.css'
import Productos from './components/Pages/Productos'
import NavBar from './components/comun/Navbar'


class App extends Component {
  render() {
  return (
    <div>
      <NavBar />
      <Productos />
    </div>
  )
}
}

export default App