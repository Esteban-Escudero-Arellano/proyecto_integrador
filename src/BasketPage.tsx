// BasketPage.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './images/Logo.jpg';
import CarritoVacio from './images/Carrito Vacio.jpg';
import './BasketPage.css';

const BasketPage: React.FC = () => {
  // Estado local para almacenar los productos en el carrito
  const [productosEnCarrito, setProductosEnCarrito] = useState<string[]>([]);

  // Función para agregar un producto al carrito
  const agregarProductoAlCarrito = (producto: string) => {
    setProductosEnCarrito((prevProductos) => [...prevProductos, producto]);
  };

  return (
    <div className="basket-page">
      <div className="header">
        <Link to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>
      </div>

      <div className="content">
        {productosEnCarrito.length === 0 ? (
          <img src={CarritoVacio} alt="Basket" className="basket-image" />
        ) : (
          <div>
            <h2>Productos en el carrito:</h2>
            <ul>
              {productosEnCarrito.map((producto, index) => (
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
