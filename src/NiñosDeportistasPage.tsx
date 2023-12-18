import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NiñosDeportistasPage.css';
import Product from './Product'; 
import logo from './images/Logo.jpg'; 

const NiñosDeportistasPage: React.FC = () => {
  const navigate = useNavigate();

  const products = [
    { id: 41, imageSrc: '', price: '$', title: '' },
    { id: 42, imageSrc: '', price: '$', title: '' },
    { id: 43, imageSrc: '', price: '$', title: '' },
    { id: 44, imageSrc: '', price: '$', title: '' },
    { id: 45, imageSrc: '', price: '$', title: '' },
    { id: 46, imageSrc: '', price: '$', title: '' },
    { id: 47, imageSrc: '', price: '$', title: '' },
    { id: 48, imageSrc: '', price: '$', title: '' },
    { id: 49, imageSrc: '', price: '$', title: '' },
    { id: 50, imageSrc: '', price: '$', title: '' },
    { id: 51, imageSrc: '', price: '$', title: '' },
    { id: 52, imageSrc: '', price: '$', title: '' },
    { id: 53, imageSrc: '', price: '$', title: '' },
    { id: 54, imageSrc: '', price: '$', title: '' },
    { id: 55, imageSrc: '', price: '$', title: '' },
    { id: 56, imageSrc: '', price: '$', title: '' },
    { id: 57, imageSrc: '', price: '$', title: '' },
    { id: 58, imageSrc: '', price: '$', title: '' },
    { id: 59, imageSrc: '', price: '$', title: '' },
    { id: 60, imageSrc: '', price: '$', title: '' },
  ];

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleAddToCart = (productId: number) => {
    // Implementa tu lógica para agregar el producto al carrito
    console.log(`Producto ${productId} agregado al carrito`);
  };

  return (
    <div className="niños-deportistas-page">
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

export default NiñosDeportistasPage;
