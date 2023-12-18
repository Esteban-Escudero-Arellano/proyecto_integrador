import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AccesoriosDeportivosPage.css';
import Product from './Product'; 
import logo from './images/Logo.jpg'; 

const AccesoriosDeportivosPage: React.FC = () => {
  const navigate = useNavigate();

  const products = [
    { id: 61, imageSrc: '', price: '$', title: '' },
    { id: 62, imageSrc: '', price: '$', title: '' },
    { id: 63, imageSrc: '', price: '$', title: '' },
    { id: 64, imageSrc: '', price: '$', title: '' },
    { id: 65, imageSrc: '', price: '$', title: '' },
    { id: 66, imageSrc: '', price: '$', title: '' },
    { id: 67, imageSrc: '', price: '$', title: '' },
    { id: 68, imageSrc: '', price: '$', title: '' },
    { id: 69, imageSrc: '', price: '$', title: '' },
    { id: 70, imageSrc: '', price: '$', title: '' },
    { id: 71, imageSrc: '', price: '$', title: '' },
    { id: 72, imageSrc: '', price: '$', title: '' },
    { id: 73, imageSrc: '', price: '$', title: '' },
    { id: 74, imageSrc: '', price: '$', title: '' },
    { id: 75, imageSrc: '', price: '$', title: '' },
    { id: 76, imageSrc: '', price: '$', title: '' },
    { id: 77, imageSrc: '', price: '$', title: '' },
    { id: 78, imageSrc: '', price: '$', title: '' },
    { id: 79, imageSrc: '', price: '$', title: '' },
    { id: 80, imageSrc: '', price: '$', title: '' },
  ];

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleAddToCart = (productId: number) => {
    // Implementa tu lógica para agregar el producto al carrito
    console.log(`Producto ${productId} agregado al carrito`);
  };

  return (
    <div className="accesorios-deportivos-page">
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

export default AccesoriosDeportivosPage;
