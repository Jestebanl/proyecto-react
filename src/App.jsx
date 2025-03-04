import { useState } from 'react'
import './App.css'
import NavBar from './components/comun/Navbar'
import Inicio from './components/Pages/Inicio/Inicio'
import Productos from './components/Pages/Productos/Productos'


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