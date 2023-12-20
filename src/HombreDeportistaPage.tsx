import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HombreDeportistaPage.css';
import Product, { ProductProps } from './Product'; 
import logo from './images/Logo.jpg';

interface ProductWithStock {
  id: number;
  imageSrc: string;
  price?: string;
  title?: string;
  stock: number;
}

const HombreDeportistaPage: React.FC = () => {
  const navigate = useNavigate();

  const initialProducts: ProductWithStock[] = [
    
      { id: 21, imageSrc: 'https://contents.mediadecathlon.com/p1568575/k$1f158244960b242451bd8f0e5b7482d6/short-mh100-hombre-azul-montanaslashtrekking-quechua.jpg?format=auto&quality=40&f=800x800', price: '$11.000', title: 'Short hombre mh100', stock: 3 },
      { id: 22, imageSrc: 'https://contents.mediadecathlon.com/p395566/k$6d52233e77877e40810401a0eb1cd36c/bolsa-de-fitness-plegable-30-l-blanca.jpg?format=auto&quality=40&f=800x800', price: '$6.000', title: 'Bolso plegable 30 litros', stock: 3 },
      { id: 23, imageSrc: 'https://contents.mediadecathlon.com/p2204944/k$c57559f17a0367327de7d02eefd618c3/calcetines-cortos-adultos-artengo-rs-160-gris-pack-de-3-pares.jpg?format=auto&quality=40&f=800x800', price: '$7.000', title: 'Chaussettes de sport basses artengo rs 160 noir lot de 3', stock: 3 },
      { id: 24, imageSrc: 'https://contents.mediadecathlon.com/p2023260/k$c95ee45cf5d4ef7e7710d9e9184c84a3/short-de-running-para-hombre-run-dry-azul-petroleo.jpg?format=auto&quality=40&f=800x800', price: '$6.000', title: 'Short running hombre', stock: 3 },
      { id: 25, imageSrc: 'https://contents.mediadecathlon.com/p1851232/k$6a687d1a2d04e52d1e052be5f9dbb605/short-deportivo-hombre-verde.jpg?format=auto&quality=40&f=800x800', price: '$10.000', title: 'Short training hombre 120 negro', stock: 3 },
      { id: 26, imageSrc: 'https://contents.mediadecathlon.com/p2195003/k$97b2f7929d880a657a65fb7db790ae51/chaqueta-impermeable-nh100-1slash2-cierre-hombre-montanaslashtrekking-quechua.jpg?format=auto&quality=40&f=800x800', price: '$10.000', title: 'Chaqueta cortaviento hombre', stock: 3 },
      { id: 27, imageSrc: 'https://contents.mediadecathlon.com/p2245855/k$fda466dafee1c2e7846d53bb7d69de7f/bolso-deportivo-20-litros-azul.jpg?format=auto&quality=40&f=800x800', price: '$9.000', title: 'Bolso deportivo 20 litros azul', stock: 3 },
      { id: 28, imageSrc: 'https://contents.mediadecathlon.com/p2454700/k$3044274e5c6f95734aaf630db5f37e18/short-de-tenis-dry-100-blanco-hombre.jpg?format=auto&quality=40&f=800x800', price: '$6.000', title: 'Short tenis hombre tsh100', stock: 3 },
      { id: 29, imageSrc: 'https://contents.mediadecathlon.com/p2157315/k$f7e6bac4b706a58cb6d47203ece9234c/polera-running-hombre-dry-negro.jpg?format=auto&quality=40&f=800x800', price: '$8.000', title: 'Polera running hombre dry negro', stock: 3 },
      { id: 30, imageSrc: 'https://contents.mediadecathlon.com/p2454682/k$6494abfcd06ec5c8b290caee52cad423/short-de-tenis-hombre-dry-500-azul-marino.jpg?format=auto&quality=40&f=800x800', price: '$11.000', title: 'Short tenis hombre essential+', stock: 3 },
      { id: 31, imageSrc: 'https://contents.mediadecathlon.com/p1851222/k$cdb373f7ec13ffd4ae52880816a16c44/polera-fitness-cardio-training-hombre-gris-fts100.jpg?format=auto&quality=40&f=800x800', price: '$6.000', title: 'Polera hombre 100', stock: 3 },
      { id: 32, imageSrc: 'https://contents.mediadecathlon.com/p2163146/k$7a1909e01adce3a03a5ad3ee08da715d/zapatillas-acuaticas-adulto-elasticas-120-rojo.jpg?format=auto&quality=40&f=800x800 ', price: '$13.000', title: 'Zapatillas de agua adultos 120 negro', stock: 3 },
      { id: 33, imageSrc: 'https://contents.mediadecathlon.com/p1851221/k$7d9af56ed7e444f7e5bf44093155d10b/short-deportivo-hombre-verde.jpg?format=auto&quality=40&f=800x800', price: '$10.000', title: 'Short hombre 120', stock: 3 },
      { id: 34, imageSrc: 'https://contents.mediadecathlon.com/p1851866/k$dc978223d32a0357e265b48302f46be3/buzo-de-fitness-cardio-training-hombre-azul-marino-120-eco-disenado.jpg?format=auto&quality=40&f=800x800', price: '$16.000', title: 'Pantalón training hombre', stock: 3 },
      { id: 35, imageSrc: 'https://contents.mediadecathlon.com/p1961439/k$f00c14233fa98545a6c0c66a144fba41/calcetines-de-running-ekiden-blanco-x3.jpg?format=auto&quality=40&f=800x800', price: '$6.000', title: 'Calcetines running ekiden x3 negro', stock: 3 },
      { id: 36, imageSrc: 'https://contents.mediadecathlon.com/p1604448/k$369d15746c23aad4fe56d71c4cb8fde4/pantalon-corto-de-futbol-adulto-f100-negro.jpg?format=auto&quality=40&f=800x800', price: '$7.000', title: 'Short de fútbol adulto f100 negro', stock: 3 },
      { id: 37, imageSrc: 'https://contents.mediadecathlon.com/p2164519/k$2a0627f37dcf2dc451a058f74c6c8310/sandalias-de-senderismo-arpenaz-50-hombre.jpg?format=auto&quality=40&f=800x800', price: '$20.000', title: 'Sandalias de senderismo hombre nh100 gris', stock: 3 },
      { id: 38, imageSrc: 'https://contents.mediadecathlon.com/p2273811/k$9a3de96fa1c9b43a156ba43ea3e5958c/polera-fitness-cardio-training-hombre-gris-fts100.jpg?format=auto&quality=40&f=800x800', price: '$6.000', title: 'Polera hombre 100', stock: 3 },
      { id: 39, imageSrc: 'https://contents.mediadecathlon.com/p2146105/k$85a6824abc26f714e36580d75bddc12e/zapatillas-acuaticas-adulto-elasticas-120-rojo.jpg?format=auto&quality=40&f=800x800', price: '$13.000', title: 'Zapatillas de agua adultos 120 verde', stock: 3 },
      { id: 40, imageSrc: 'https://contents.mediadecathlon.com/p1215767/k$f4afd2ff2a61bdc899baf89d8c9bdaac/zapatillas-de-senderismo-naturaleza-nh100-negro-hombre.jpg?format=auto&quality=40&f=800x800', price: '$15.000', title: 'Zapatillas hombre nh100', stock: 3 }
    ];


    const [products, setProducts] = useState(initialProducts);

    const handleGoBack = () => {
      navigate(-1);
    };
  
    const handleAddToCart = (productId: number) => {
      const updatedProducts = products.map((prod) =>
        prod.id === productId ? { ...prod, stock: prod.stock - 1 } : prod
      );
      setProducts(updatedProducts);
  
      console.log(`Producto ${productId} agregado al carrito`);
    };

    const handleGoToCart = () => {
      navigate('/basket');
    };
  
    return (
      <div className="hombre-deportista-page">
        <img src={logo} alt="Logo" className="logo" />
        <div className="product-grid">
          {products.map((product) => (
            <Product
              key={product.id}
              imageSrc={product.imageSrc}
              price={product.price}
              title={product.title}
              stock={product.stock}
              onAddToCart={() => handleAddToCart(product.id)}
            />
          ))}
        </div>
        <button onClick={handleGoBack} className="back-button">
          Volver
        </button>

        <button onClick={handleGoToCart} className="carr-button">
        Carro
    </button>
      </div>
    );
  };
  
  export default HombreDeportistaPage;