import React from 'react';
import './Product.css';

interface ProductProps {
  imageSrc: string;
  price?: string;
  title?: string;
  onAddToCart: () => void; // Agrega una nueva propiedad para el clic del botón "Agregar al carrito"
}

const Product: React.FC<ProductProps> = ({ imageSrc, price, title, onAddToCart }) => {
  return (
    <div className="product">
      <img src={imageSrc} alt="Product" className="product-image" />
      <div className="product-details">
        {title && <p className="product-title">{title}</p>}
        {price && <p className="product-price">{price}</p>}
        <button onClick={onAddToCart}>Agregar al Carrito</button>
      </div>
    </div>
  );
};

export default Product;
