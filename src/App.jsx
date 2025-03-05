import { useState } from 'react'
import './App.css'
import NavBar from './components/comun/Navbar/Navbar'
import Footer from './components/comun/Footer/Footer'
import Inicio from './components/Pages/Inicio/Inicio'
import Productos from './components/Pages/Productos/Productos'
import Login from './auth/Login'

function App() {
  const [page, setPage] = useState('inicio')
  const [showLoginPopup, setShowLoginPopup] = useState(false)

  const cambiarPagina = pagina => {
    setPage(pagina)
  }

  const toggleLoginPopup = () => {
    setShowLoginPopup(!showLoginPopup)
  }

  const getContent = () => {
    switch(page) {
      case 'inicio':
        return <Inicio />
      case 'productos':
        return <Productos />
      case 'blog':
        return <div>Contenido del Blog</div>
      case 'desarrolladores':
        return <div>Contenido de Desarrolladores</div>
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

      <Footer/>
    </div>
  )
}

export default App
