import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-row">
          <div className="footer-links">
            <h4>Compañía</h4>
            <ul>
              <li><a href="#">Nosotros</a></li>
              <li><a href="#">Nuestros servicios</a></li>
              <li><a href="#">Política de privacidad</a></li>
              <li><a href="#">Trabaja con nosotros</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Ayuda</h4>
            <ul>
              <li><a href="#">Preguntas frecuentes</a></li>
              <li><a href="#">Compras</a></li>
              <li><a href="#">Envíos</a></li>
              <li><a href="#">Estatus de orden</a></li>
              <li><a href="#">Pago</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Tratamientos</h4>
            <ul>
              <li><a href="#">Depilación laser</a></li>
              <li><a href="#">Estética avanzada</a></li>
              <li><a href="#">Medicina estética</a></li>
              <li><a href="#">Promociones</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Síguenos</h4>
            <div className="social-link">
              <a href="https://www.facebook.com/CentrosUnico" target="_blank">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/centrosunico/" target="_blank">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/@CentrosUnicoOficial" target="_blank">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://linktr.ee/unicovaguada" target="_blank">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer