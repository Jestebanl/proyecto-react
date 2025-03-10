import './Navbar.css';

function Navbar({ cambiarLaPagina, toggleLoginPopup }) {
  return (
    <header id="header">
      <div className="logo">
        <a href="#" className="logo" onClick={() => cambiarLaPagina('inicio')}>
          <img src="/img/iconCentrosUnico.png" alt="Logo" className="logoImg" />
        </a>
      </div>

      <nav id="nav">
        <ul>
          <li className="lista-nav">
            <a onClick={() => cambiarLaPagina('inicio')}>Inicio</a>
          </li>
          <li className="lista-nav">
            <a onClick={() => cambiarLaPagina('productos')}>Productos</a>
          </li>
          <li className="lista-nav">
            <a onClick={() => cambiarLaPagina('blog')}>Blog</a>
          </li>
          <li className="lista-nav">
            <a onClick={() => cambiarLaPagina('desarrolladores')}>Desarrolladores</a>
          </li>
        </ul>
      </nav>

      <div className="botonesHeader">
        <a href="#" className="perfil" id="btnSesion" onClick={toggleLoginPopup}>
          <i className="fa-solid fa-user"></i>
        </a>
        <a onClick={() => cambiarLaPagina('cesta')} className="cesta" id="btnCesta">
          <i className="fa-solid fa-bag-shopping"></i>
        </a>
      </div>
    </header>
  );
}

export default Navbar;
