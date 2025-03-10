import './Navbar.css';

// eslint-disable-next-line react/prop-types
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
          <li onClick={() => cambiarLaPagina('inicio')} className="lista-nav">
            <p>Inicio</p>
          </li>
          <li onClick={() => cambiarLaPagina('productos')} className="lista-nav">
            <p>Productos</p>
          </li>
          <li onClick={() => cambiarLaPagina('blog')} className="lista-nav">
            <p>Blog</p>
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
