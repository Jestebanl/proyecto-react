import { useState } from 'react'
import './App.css'
import NavBar from './components/comun/Navbar/Navbar'
import Footer from './components/comun/Footer/Footer'
import Inicio from './components/Pages/Inicio/Inicio'
import Productos from './components/Pages/Productos/Productos'
import Buscador from './components/Pages/Buscador/Buscador'
import Login from './auth/Login'
import Cesta from './components/Pages/Cesta/Cesta'
import { Toaster, toast  } from 'sonner'
import Blog from './components/Pages/Blog/Blog'
import ProductosPopup from './components/Cards/ProductosPopup/ProductosPopup'

function App() {
  const [page, setPage] = useState('inicio')
  const [showLoginPopup, setShowLoginPopup] = useState(false)
  const [cesta, setCesta] = useState([])
  const [busqueda, setBusqueda] = useState('')
  const [showCardPopup, setShowCardPopup] = useState(false)
  const [cardPopup, setCardPoput] = useState({})

  const cambiarPagina = pagina => {
    setPage(pagina)
  }

  const addToCart = producto => {
    setCesta([...cesta, producto])
    toast.success('Producto añadido a la cesta');
  }

  const removeFromCart = productoId => {
    setCesta(cesta.filter(p => p.id !== productoId))
    toast.error('Producto eliminado de la cesta');
  }

  const buscar = texto => {
    setBusqueda(texto)
  }

  const toggleLoginPopup = () => {
    setShowLoginPopup(!showLoginPopup)
  }

  const definirCardPopup = producto => {
    setCardPoput(producto)
    toggleCardPopup()
  }

  const toggleCardPopup = () => {
    setShowCardPopup(!showCardPopup)
  }

  const getContent = () => {
    switch(page) {
      case 'inicio':
        return <Inicio addToCart={addToCart} toggleCard={definirCardPopup}/>
      case 'productos':
        return <><Buscador buscar={buscar}/><Productos addToCart={addToCart} busqueda={busqueda} toggleCard={definirCardPopup}/></>
      case 'blog':
        return <Blog/>
      case 'cesta':
        return <Cesta cesta={cesta} removeFromCart={removeFromCart}/>
      default:
        return <Inicio />
    }
  }

  return (
    <div>
      <NavBar 
        cambiarLaPagina={cambiarPagina} 
        toggleLoginPopup={toggleLoginPopup} 
      />
      
      {getContent()}

      {showLoginPopup && <Login onClose={toggleLoginPopup} />}

      {showCardPopup && <ProductosPopup onClose={toggleCardPopup} producto={cardPopup} addToCart={addToCart} />}
      
      <Toaster />

      <Footer/>
    </div>
  )
}

export default App
