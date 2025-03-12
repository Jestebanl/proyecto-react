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
import LoginData from './data/login.json'
import Logged from './auth/Logged'

function App() {
  const [page, setPage] = useState('inicio')
  const [showLoginPopup, setShowLoginPopup] = useState(false)
  const [cesta, setCesta] = useState([])
  const [busqueda, setBusqueda] = useState('')
  const [showCardPopup, setShowCardPopup] = useState(false)
  const [cardPopup, setCardPoput] = useState({})
  const [idCesta, setIdCesta] = useState(1)
  const [isLogged, setIsLogged] = useState(false)
  const [login, setLogin] = useState([])


  const logins = LoginData.login

  const checkLogin = (user, pass) => {
    if(user === '' || pass === '') {
      toast.error('Usuario o contraseña vacíos')
      return
    }
    else {
      console.log(user, pass);
      let loginFound = false
      logins.forEach((l) => {
        if (l.email === user && l.password === pass) {
          setLogin(l)
          loginFound = true
        }
      })
      console.log(login)
      if (loginFound) {
        setIsLogged(true)
        setShowLoginPopup(false)
        toast.success('Login correcto')
      } else {
        setIsLogged(false)
        toast.error('Login incorrecto')
      }
    }
  }

  const logout = () => {
    setIsLogged(false)
  }

  const cambiarPagina = pagina => {
    setPage(pagina)
  }

  const addToCart = producto => {
    setCesta([...cesta, producto])
    setIdCesta(producto.id + 1)
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
    if(page === 'inicio') {
      return <Inicio addToCart={addToCart} toggleCard={definirCardPopup} idCesta={idCesta}/>
    }
    else if(page === 'productos') {
      return <><Buscador buscar={buscar}/><Productos addToCart={addToCart} busqueda={busqueda} toggleCard={definirCardPopup} idCesta={idCesta}/></>
    }
    else if(page === 'blog') {
      return <Blog/>
    }
    else if(page === 'cesta') {
      if(isLogged){
        return <Cesta cesta={cesta} removeFromCart={removeFromCart}/>
      }
      else {
        toast.error('Debes iniciar sesión para ver la cesta')
        cambiarPagina('inicio') 
        return <Inicio />
      }
    }
    else {
      return <Inicio />
    }
  }

  const getLoginPopup = () => {
    if(isLogged) {
      return <Logged onClose={toggleLoginPopup} logout={logout} login={login} />
    }
    else {
      return <Login onClose={toggleLoginPopup} checkLogin={checkLogin} />
    }
  }

  return (
    <div>
      <NavBar 
        cambiarLaPagina={cambiarPagina} 
        toggleLoginPopup={toggleLoginPopup} 
      />
      
      {getContent()}

      {showLoginPopup && getLoginPopup()}

      {showCardPopup && <ProductosPopup onClose={toggleCardPopup} producto={cardPopup} addToCart={addToCart} />}
      
      <Toaster />

      <Footer/>
    </div>
  )
}

export default App
