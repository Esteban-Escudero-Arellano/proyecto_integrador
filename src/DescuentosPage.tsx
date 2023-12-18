import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DescuentosPage.css';
import Product from './Product'; 
import logo from './images/Logo.jpg'; 

const DescuentosPage: React.FC = () => {
  const navigate = useNavigate();

  const products = [
    { id: 81, imageSrc: '', price: '$', title: '' },
    { id: 82, imageSrc: '', price: '$', title: '' },
    { id: 83, imageSrc: '', price: '$', title: '' },
    { id: 84, imageSrc: '', price: '$', title: '' },
    { id: 85, imageSrc: '', price: '$', title: '' },
    { id: 86, imageSrc: '', price: '$', title: '' },
    { id: 87, imageSrc: '', price: '$', title: '' },
    { id: 88, imageSrc: '', price: '$', title: '' },
    { id: 89, imageSrc: '', price: '$', title: '' },
    { id: 90, imageSrc: '', price: '$', title: '' },
    { id: 91, imageSrc: '', price: '$', title: '' },
    { id: 92, imageSrc: '', price: '$', title: '' },
    { id: 93, imageSrc: '', price: '$', title: '' },
    { id: 94, imageSrc: '', price: '$', title: '' },
    { id: 95, imageSrc: '', price: '$', title: '' },
    { id: 96, imageSrc: '', price: '$', title: '' },
    { id: 97, imageSrc: '', price: '$', title: '' },
    { id: 98, imageSrc: '', price: '$', title: '' },
    { id: 99, imageSrc: '', price: '$', title: '' },
    { id: 100, imageSrc: '', price: '$', title: '' },
  ];

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleAddToCart = (productId: number) => {
    // Implementa tu lógica para agregar el producto al carrito
    console.log(`Producto ${productId} agregado al carrito`);
  };

  return (
    <div className="descuentos-page">
      <img src={logo} alt="Logo" className="logo" />
      <div className="product-grid">
        {products.map((product) => (
          <Product
            key={product.id}
            imageSrc={product.imageSrc}
            price={product.price}
            title={product.title}
            onAddToCart={() => handleAddToCart(product.id)}
          />
        ))}
      </div>
      <button onClick={handleGoBack} className="back-button">
        Volver
      </button>
    </div>
  );
};

export default DescuentosPage;

