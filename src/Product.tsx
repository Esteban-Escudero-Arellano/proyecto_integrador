// Product.tsx
import React from 'react';

export interface ProductProps {
  imageSrc: string;
  price?: string;
  title?: string;
  stock?: number;
  onAddToCart: () => void;
}

const Product: React.FC<ProductProps> = ({ imageSrc, price, title, stock, onAddToCart }) => {
  return (
    <div className="product">
      <img src={imageSrc} alt="Product" className="product-image" style={{ maxWidth: '100%', height: 'auto' }} />
      <div className="product-details">
        {title && <p className="product-title">{title}</p>}
        {price && <p className="product-price">{price}</p>}
        {stock !== undefined && <p className="product-stock">Stock: {stock}</p>}
        <button onClick={onAddToCart} disabled={stock !== undefined && stock === 0}>
          {stock !== undefined && stock === 0 ? 'Sin stock' : 'Agregar al Carrito'}
        </button>
      </div>
    </div>
  );
};


export default Product;
