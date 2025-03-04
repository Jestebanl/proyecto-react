import './Navbar.css';

function Navbar() {
  return (
    <header id="header">
      <div className="logo">
        <a href="#" className="logo">
          <img src="/img/iconCentrosUnico.png" className="logoImg" />
        </a>
      </div>

      <nav id="nav">
        <ul>
          <li className="lista-nav"><a href="#">Inicio</a></li>
          <li className="lista-nav"><a href="#">Productos</a></li>
          <li className="lista-nav"><a href="#">Promociones</a></li>
          <li className="lista-nav"><a href="#">Blog</a></li>
          <li className="lista-nav"><a href="#">Desarrolladores</a></li>
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