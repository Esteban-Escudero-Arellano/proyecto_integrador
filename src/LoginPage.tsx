import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './images/Logo.jpg';
import './LoginPage.css'; 

const LoginPage: React.FC = () => {
  return (
    <div className="login-page">
      <div className="header">
        {/* Logo sin ser enlace */}
        <img src={Logo} alt="logo" className="logo" />

        {/* Volver a la página principal */}
        <Link to="/">
          <button className="back-button">Volver</button>
        </Link>
      </div>

      <div className="content">
        <h1>¡Bienvenido!</h1>
        <p>
          <strong>Ingresa tus credenciales</strong> para continuar.
        </p>

        <div className="input-container">
          <input type="email" placeholder="Correo Electrónico" />
          <input type="password" placeholder="Contraseña" /> {/* Nuevo campo de contraseña */}
          <button className="next-button">Siguiente</button>
        </div>

        <p>
          ¿No tienes una cuenta?{' '}
          <Link to="/registro">Regístrate aquí</Link> {/* Enlace para registrarse */}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;