import './Navbar.css';

function Navbar(props) {
  return (
    <header id="header">
      <div className="logo">
        <a href="" className="logo" onClick={() => props.cambiarLaPagina('inicio')}>
          <img src="/img/iconCentrosUnico.png" className="logoImg" />
        </a>
      </div>

      <nav id="nav">
        <ul>
          <li className="lista-nav">
            <a onClick={() => props.cambiarLaPagina('inicio')}>
              Inicio
            </a>
          </li>
          <li className="lista-nav">
            <a onClick={() => props.cambiarLaPagina('productos')}>
              Productos
            </a>
          </li>
          <li className="lista-nav">
            <a onClick={() => props.cambiarLaPagina('blog')}>
              Blog
            </a>
          </li>
          <li className="lista-nav">
            <a onClick={() => props.cambiarLaPagina('desarrolladores')}>
              Desarrolladores
            </a>
          </li>
        </ul>
      </nav>

      <div className="botonesHeader">
        <a href="#" className="perfil" id="btnSesion">
          <i className="fa-solid fa-user"></i>
        </a>
        <a href="#" className="cesta" id="btnCesta">
          <i className="fa-solid fa-bag-shopping"></i>
        </a>
      </div>

    </header>
  )
}

export default Navbar