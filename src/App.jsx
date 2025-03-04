import { useState } from 'react'
//import ProductosData from './data/productos.json'
//import viteLogo from '/vite.svg'
import './App.css'
import Productos from './components/Pages/Productos/Productos'
import NavBar from './components/comun/Navbar'
import Inicio from './components/Pages/Inicio/Inicio'


function App(){

  const [page, setPage] = useState('inicio')

  const cambiarPagina = pagina => {
    setPage(pagina)
  }

  const getContent = () => {
    if(page === 'inicio')
      return <Inicio />
    else if(page === 'productos')
      return <Productos />
    else if(page === 'promociones')
      return ""
    else if(page === 'blog')
      return ""
    else if(page === 'desarrolladores')
      return ""
    else
      return <Inicio />

  }

  return (
    <div>
      <NavBar cambiarLaPagina={cambiarPagina}/>
      {getContent()}
    </div>
  )

}

export default App