/* eslint-disable react/prop-types */


function Logged({ onClose, logout, login }) {
  console.log(login);

  return (
    <div className="login-popup">
      <div className="login-popup-content">
        <button className="close-button" onClick={onClose}>&times;</button>
        <h2>Iniciar sesión</h2>
          <div className="form-group">
            <p>Nombre de usuario: {login.username}</p>
          </div>
          <div className="form-group">
            <p>Email: {login.email}</p>
          </div>
          <button type="button" className="submit-button" onClick={() => logout()}>Cerrar sesión</button>
        
      </div>
    </div>
  )
}

export default Logged