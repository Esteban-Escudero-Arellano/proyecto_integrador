import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './images/Logo.jpg';
import CarritoVacio from './images/Carrito Vacio.jpg';
import './BasketPage.css';


type BasketPageState = {
  productosEnCarrito: string[];
};

const BasketPage: React.FC = () => {
  const [state, setState] = useState<BasketPageState>({
    productosEnCarrito: [],
  });

  const agregarProductoAlCarrito = (producto: string) => {
    setState((prevState) => ({
      productosEnCarrito: [...prevState.productosEnCarrito, producto],
    }));
  };

  return (
    <div className="basket-page">
      <div className="header">
        <Link to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>
      </div>

      <div className="content">
        {state.productosEnCarrito.length === 0 ? (
          <img src={CarritoVacio} alt="Basket" className="basket-image" />
        ) : (
          <div>
            <h2>Productos en el carrito:</h2>
            <ul>
              {state.productosEnCarrito.map((producto, index) => (
                <li key={index}>{producto}</li>
              ))}
            </ul>
          </div>
        )}
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
