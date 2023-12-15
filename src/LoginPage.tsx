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
          <button className="next-button">Siguiente</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
