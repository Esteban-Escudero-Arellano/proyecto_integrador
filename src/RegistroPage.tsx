// RegistroPage.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './images/Logo.jpg';
import './RegistroPage.css';

const RegistroPage: React.FC = () => {
  const [userId, setUserId] = useState<string>('');
  const [nombre, setNombre] = useState<string>('');
  const [correo, setCorreo] = useState<string>('');
  const [contrasena, setContrasena] = useState<string>('');

  const handleRegistro = async () => {
    const nuevoId = generarIdUnico();
    setUserId(nuevoId);

    try {
      const response = await fetch('/api/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: nuevoId,
          nombre,
          correo,
          contrasena,
        }),
      });

      if (response.ok) {
        // Usuario registrado con éxito
        console.log(`Usuario registrado con ID: ${nuevoId}`);
      } else {
        // Manejar errores del servidor
        console.error('Error en el registro');
      }
    } catch (error) {
      // Manejar errores de red
      console.error('Error de red', error);
    }
  };

  const generarIdUnico = () => {
    return `user_${Date.now()}`;
  };

  return (
    <div className="registro-page">
      <div className="header">
        <img src={Logo} alt="logo" className="logo" />
        <Link to="/login">
          <button className="back-button">Volver</button>
        </Link>
      </div>

      <div className="content">
        <h1>Registro de Usuario</h1>
        <p>Completa los campos para crear una nueva cuenta.</p>

        <div className="input-container">
          <input type="text" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} />
          <input type="email" placeholder="Correo Electrónico" onChange={(e) => setCorreo(e.target.value)} />
          <input type="password" placeholder="Contraseña" onChange={(e) => setContrasena(e.target.value)} />
          <button className="register-button" onClick={handleRegistro}>
            Registrarse
          </button>
        </div>

        <p>
          ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
        </p>
      </div>
    </div>
  );
};

export default RegistroPage;
