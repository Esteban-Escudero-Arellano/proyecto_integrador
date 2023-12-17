// Product.tsx
import React from 'react';
import './Product.css';

interface ProductProps {
  imageSrc: string;
  price?: string; // Hacer opcional
  title?: string; // Hacer opcional
  onClick: () => void;
}

const Product: React.FC<ProductProps> = ({ imageSrc, price, title, onClick }) => {
  return (
    <div className="product" onClick={onClick}>
      <img src={imageSrc} alt="Product" className="product-image" />
      <div className="product-details">
        {title && <p className="product-title">{title}</p>}
        {price && <p className="product-price">{price}</p>}
      </div>
    </div>
  );
};

export default Product;
