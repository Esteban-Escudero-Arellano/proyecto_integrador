import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NiñosDeportistasPage.css';
import Product, { ProductProps } from './Product'; 
import logo from './images/Logo.jpg';

interface ProductWithStock {
  id: number;
  imageSrc: string;
  price?: string;
  title?: string;
  stock: number;
}

const NiñosDeportistasPage: React.FC = () => {
  const navigate = useNavigate();

  const initialProducts: ProductWithStock[] = [
    { id: 41, imageSrc: 'https://contents.mediadecathlon.com/p1528694/k$2dfde22f7dc83668ca3bd22d6f5dbc0a/aro-de-basquetbol-b100-easy-negroajustable-sin-herramientas-220-305-m.jpg?format=auto&quality=40&f=800x800', price: '$200.000', title: 'Aro de básquetbol b100 easy negro', stock: 3 },
    { id: 42, imageSrc: 'https://contents.mediadecathlon.com/p1627278/k$bfb75c06b368e7014773aa293d6e7cd3/mesa-de-ping-pong-free-ppt-130-small-indoor.jpg?format=auto&quality=40&f=800x800', price: '$85.000', title: 'Mesa de ping pong ppt130 small indoor', stock: 3 },
    { id: 43, imageSrc: 'https://contents.mediadecathlon.com/p2132139/k$d91cba00b7fbbd663175757417db01a1/traje-de-bano-natacion-nina-azul.jpg?format=auto&quality=40&f=800x800', price: '$4.000', title: 'Traje de baño natación niña', stock: 3 },
    { id: 44, imageSrc: 'https://contents.mediadecathlon.com/p2132158/k$04222d10cbdfcb6b291ba6ecdb430f8e/traje-de-bano-natacion-nina-azul.jpg?format=auto&quality=40&f=800x800', price: '$11.000', title: 'Traje de baño natación niña azul', stock: 3 },
    { id: 45, imageSrc: 'https://contents.mediadecathlon.com/p2075908/k$a6d36e9546cf67759f3f3bfffef58c26/patines-quad-100-ninos-negro.jpg?format=auto&quality=40&f=800x800', price: '$55.000', title: 'Patines niños quad 100 negro', stock: 3 },
    { id: 46, imageSrc: 'https://contents.mediadecathlon.com/p2075910/k$7e5b1ee43007ff8d6ca93214279778ab/patines-quad-100-ninos-negro.jpg?format=auto&quality=40&f=800x800', price: '$55.000', title: 'Patines niños quad 100 blanco holográfico', stock: 3 },
    { id: 47, imageSrc: 'https://contents.mediadecathlon.com/p2075916/k$c333a63f0d85bf56552650e63d88b5c3/patines-ninos-play3-rosado-violeta.jpg?format=auto&quality=40&f=800x800', price: '$25.000', title: 'Patines en línea infantil azul/rojo play3', stock: 3 },
    { id: 48, imageSrc: 'https://contents.mediadecathlon.com/p1800414/k$504ee230d7b0a560b452220709e0f9c9/arco-de-futbol-kage-negro.jpg?format=auto&quality=40&f=800x800', price: '$30.000', title: 'Arco de fútbol kage', stock: 3 },
    { id: 49, imageSrc: 'https://contents.mediadecathlon.com/p1910552/k$2675062b2f37e486d7716a4867d6631a/casco-para-patines-skateboard-y-scooter-mf500-gris.jpg?format=auto&quality=40&f=800x800', price: '$20.000', title: 'Casco para patinar rosado mf500', stock: 3 },
    { id: 50, imageSrc: 'https://contents.mediadecathlon.com/p1521806/k$1f0a589816b2b33f63acc7cf0c23c35f/bicicleta-para-ninos-aro-14-3-5-anos-100-dragon-cn-fra-btwin.jpg?format=auto&quality=40&f=800x800', price: '$100.000', title: 'Bicicleta de niños aro 14" dragon100 blanco/azul', stock: 3 },
    { id: 51, imageSrc: 'https://contents.mediadecathlon.com/p1279611/k$2e596197f8d1adea19e0a37f015ccf82/short-de-futbol-infantil-f100-negro.jpg?format=auto&quality=40&f=800x800', price: '$6.000', title: 'Short fútbol niños essentiel negro', stock: 3 },
    { id: 52, imageSrc: 'https://contents.mediadecathlon.com/p2152377/k$65114ffd612aafe6a68bbb0eda0fb87b/patin-fitness-ninos-fit-5-nin-gris-rosa.jpg?format=auto&quality=40&f=800x800', price: '$65.000', title: 'Patines en línea infantil verde/coral fit5', stock: 3 },
    { id: 53, imageSrc: 'https://contents.mediadecathlon.com/p2154120/k$15d2519978c2382c9ab019fc1a8e7dce/balon-de-futbol-f500-hibrido-talla-5-rojo.jpg?format=auto&quality=40&f=800x800', price: '$16.000', title: 'Balón de fútbol f500 híbrido talla 5 rojo', stock: 3 },
    { id: 54, imageSrc: 'https://contents.mediadecathlon.com/p1300043/k$2ef2e9fe5aec5651ea676ed23638ed83/traje-surf-corto-100-neopren-15-mm-ninos-azul-azul.jpg?format=auto&quality=40&f=800x800', price: '$18.000', title: 'Traje surf corto 100 neoprén 1,5 mm niños azul azul', stock: 3 },
    { id: 55, imageSrc: 'https://contents.mediadecathlon.com/p1333430/k$cb4bab963cffa1a371d6214c1ba69d94/scooter-mid-9-mixto.jpg?format=auto&quality=40&f=800x800', price: '$80.000', title: 'Scooter mid 9 mixto', stock: 3 },
    { id: 56, imageSrc: 'https://contents.mediadecathlon.com/p2154017/k$99c964da1ff291d8bc92d13710dc5bd7/balon-de-futbol-talla-5.jpg?format=auto&quality=40&f=800x800', price: '$9.000', title: 'Balón de fútbol talla 5 amarillo', stock: 3 },
    { id: 57, imageSrc: 'https://contents.mediadecathlon.com/p1610359/k$7a3d9f4ffe5d4789c5f9847f3fe42abb/calcetines-de-futbol-ninos-f500-azul.jpg?format=auto&quality=40&f=800x800', price: '$6.000', title: 'Calcetines de fútbol niños f500 negro', stock: 3 },
    { id: 58, imageSrc: 'https://contents.mediadecathlon.com/p1610710/k$cdfdb78b6fab03e3ce7dfc9a16d05afa/calcetas-de-futbol-ninos-f100-blancas.jpg?format=auto&quality=40&f=800x800', price: '$3.000', title: 'Calcetines fútbol niños f100', stock: 3 },
    { id: 59, imageSrc: 'https://contents.mediadecathlon.com/p2154127/k$2799c00bbec1a4ad63c8b1af80083172/balon-de-futbol-f500-hibrido-talla-5-rojo.jpg?format=auto&quality=40&f=800x800', price: '$16.000', title: 'Balón de fútbol f500 híbrido talla 5 blanco/negro', stock: 3 },
    { id: 60, imageSrc: 'https://contents.mediadecathlon.com/p1622622/k$5c3d50f70f1114280161d3f63e793003/skateboard-ninos-3-a-7-anos-play-120.jpg?format=auto&quality=40&f=800x800', price: '$36.000', title: 'Skateboard infantil play120', stock: 3 },
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
          stock={product.stock}
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
