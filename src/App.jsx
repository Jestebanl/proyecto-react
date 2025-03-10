import { useState } from 'react'
import './App.css'
import NavBar from './components/comun/Navbar/Navbar'
import Footer from './components/comun/Footer/Footer'
import Inicio from './components/Pages/Inicio/Inicio'
import Productos from './components/Pages/Productos/Productos'
import Login from './auth/Login'
import Cesta from './components/Pages/Cesta/Cesta'
import { Toaster, toast  } from 'sonner'

function App() {
  const [page, setPage] = useState('inicio')
  const [showLoginPopup, setShowLoginPopup] = useState(false)
  const [cesta, setCesta] = useState([])

  const cambiarPagina = pagina => {
    setPage(pagina)
  }

  const addToCart = producto => {
    setCesta([...cesta, producto])
    toast.success('Producto añadido a la cesta');

  }

  const toggleLoginPopup = () => {
    setShowLoginPopup(!showLoginPopup)
  }

  const getContent = () => {
    switch(page) {
      case 'inicio':
        return <Inicio addToCart={addToCart}/>
      case 'productos':
        return <Productos addToCart={addToCart}/>
      case 'blog':
        return <div>Contenido del Blog</div>
      case 'desarrolladores':
        return <div>Contenido de Desarrolladores</div>
      case 'cesta':
        return <Cesta cesta={cesta}/>
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
      
      <Toaster />

      <Footer/>
    </div>
  )
}

export default App
