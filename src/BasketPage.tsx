// BasketPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './images/Logo.jpg';
import CarritoVacio from './images/Carrito Vacio.jpg';
import './BasketPage.css';

const BasketPage: React.FC = () => {
  return (
    <div className="basket-page">
      <div className="header">
        <Link to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>
      </div>

      <div className="content">
        <img src={CarritoVacio} alt="Basket" className="basket-image" />
      </div>

      <div className="footer">
        <Link to="/">
          <button className="back-button">Volver</button>
        </Link>
      </div>
    </div>
  );
};

export default BasketPage;
