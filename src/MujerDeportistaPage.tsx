import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MujerDeportistaPage.css';
import Product, { ProductProps } from './Product'; 
import logo from './images/Logo.jpg';

interface ProductWithStock {
  id: number;
  imageSrc: string;
  price?: string;
  title?: string;
  stock: number;
}

const MujerDeportistaPage: React.FC = () => {
  const navigate = useNavigate();

  const initialProducts: ProductWithStock[] = [
    { id: 1, imageSrc: 'https://contents.mediadecathlon.com/p1848691/k$9bf94105d53d1cdacf146e09ed057474/chaqueta-impermeable-senderismo-naturaleza-nh100-turquesa-mujer.jpg?format=auto&quality=40&f=520x520', price: '$8.000', title: 'Chaqueta cortaviento mujer', stock: 3 },
    { id: 2, imageSrc: 'https://contents.mediadecathlon.com/p2204944/k$c57559f17a0367327de7d02eefd618c3/calcetines-cortos-adultos-artengo-rs-160-gris-pack-de-3-pares.jpg?format=auto&quality=40&f=520x520', price: '$7.000', title: 'Chaussettes de sport basses artengo rs 160 noir lot de 3', stock: 3 },
    { id: 3, imageSrc: 'https://contents.mediadecathlon.com/p1734902/k$b83a04b7624d9941596c397c57c0d935/sandalias-de-senderismo-nh110-mujer.jpg?format=auto&quality=40&f=520x520', price: '$30.000', title: 'Sandalias senderismo mujer nh110 azul', stock: 3 },
    { id: 4, imageSrc: 'https://contents.mediadecathlon.com/p2135276/k$f54d6e7d021e62e180892284b737f48d/traje-de-bano-natacion-mujer-negro.jpg?format=auto&quality=40&f=520x520', price: '$11.000', title: 'Traje de baño natación mujer negro', stock: 3 },
    { id: 5, imageSrc: 'https://contents.mediadecathlon.com/p1961439/k$f00c14233fa98545a6c0c66a144fba41/calcetines-de-running-ekiden-blanco-x3.jpg?format=auto&quality=40&f=520x520', price: '$6.000', title: 'Calcetines running ekiden x3 negro', stock: 3 },
    { id: 6, imageSrc: 'https://contents.mediadecathlon.com/p2033217/k$00f1d357be4fc87afe8270707d6ee34a/zapatillas-de-basquetbol-adulto-120-negroslashrojo.jpg?format=auto&quality=40&f=520x520', price: '$35.000', title: 'Zapatillas básquetbol protect120 adulto negro/rojo', stock: 3 },
    { id: 7, imageSrc: 'https://contents.mediadecathlon.com/p1604448/k$369d15746c23aad4fe56d71c4cb8fde4/pantalon-corto-de-futbol-adulto-f100-negro.jpg?format=auto&quality=40&f=520x520', price: '$7.000', title: 'Short de fútbol adulto f100 negro', stock: 3 },
    { id: 8, imageSrc: 'https://contents.mediadecathlon.com/p2375385/k$b957120ad9a76daa1eba910fff6cf74e/traje-de-bano-entero-de-natacion-mujer-kamiye-500-azulslashverde.jpg?format=auto&quality=40&f=800x800', price: '$16.000', title: 'Traje de baño mujer 500 azul', stock: 3 },
    { id: 9, imageSrc: 'https://contents.mediadecathlon.com/p2071738/k$9adb1db87f639f12773a1f5b1222ea8b/short-deportivo-running-kalenji-run-dry-mujer-negro.jpg?format=auto&quality=40&f=800x800', price: '$9.000', title: 'Short de running mujer dry negro', stock: 3 },
    { id: 10, imageSrc: 'https://contents.mediadecathlon.com/p2383343/k$237aa9b40383bad577e62bf4a9c9bedd/traje-de-bano-de-natacion-para-mujer-una-pieza-heva-azul.jpg?format=auto&quality=40&f=800x800', price: '$5.000', title: 'Traje de baño natación mujer azul', stock: 3 },
    { id: 11, imageSrc: 'https://contents.mediadecathlon.com/p2479216/k$f44ef7b430a5d7ef50486d3c2294ae58/lentes-de-sol-de-montana-y-trekking-mh140-categoria-3-adulto-negro.jpg?format=auto&quality=40&f=800x800', price: '$17.000', title: 'Lentes de sol trekking mh140 cat.3 negro', stock: 3 },
    { id: 12, imageSrc: 'https://contents.mediadecathlon.com/p1574313/k$477bb9c479ce06de67719e6750503c5e/gorro-trek-900-impermeable-gris-claro-trekking-en-montana.jpg?format=auto&quality=40&f=800x800', price: '$19.000', title: 'Sombrero trekking impermeable trek 900', stock: 3 },
    { id: 13, imageSrc: 'https://contents.mediadecathlon.com/p2375390/k$a2edd931c8700a0b52a71c97f68540da/traje-de-bano-entero-de-natacion-mujer-kamiye-500-azulslashverde.jpg?format=auto&quality=40&f=800x800', price: '16.000', title: 'Traje de baño mujer 500 negro', stock: 3 },
    { id: 14, imageSrc: 'https://contents.mediadecathlon.com/p1691845/k$ea7ac2b43e3d08cb55754cd7a6d353aa/camiseta-termica-100-de-ski-mujer-negra.jpg?format=auto&quality=40&f=800x800', price: '$9.000', title: 'Primera capa de ski mujer bl100', stock: 3 },
    { id: 15, imageSrc: 'https://contents.mediadecathlon.com/p2495908/k$2162edaeb310718fba2a36bfa4f2f744/chaqueta-impermeable-de-vela-mujer-sailing-100-all-over-rosa.jpg?format=auto&quality=40&f=800x800', price: '$28.000', title: 'Chaqueta náutica mujer sailing100 blanco', stock: 3 },
    { id: 16, imageSrc: 'https://contents.mediadecathlon.com/p2164565/k$f5394f33a84fabd122ef84c571386233/sandalias-de-senderismo-nh110-mujer.jpg?format=auto&quality=40&f=800x800', price: '$30.000', title: 'Sandalias mujer nh110', stock: 3 },
    { id: 17, imageSrc: 'https://contents.mediadecathlon.com/p1991698/k$dc42bee9f3ca967d8b8c68301bf04d0c/zapatillas-voleibol-mujer-fit500-celeste-blanco.jpg?format=auto&quality=40&f=800x800', price: '$55.000', title: 'Zapatillas vóleibol mujer fit500', stock: 3 },
    { id: 18, imageSrc: 'https://contents.mediadecathlon.com/p2457060/k$fce91c7f5ae684f459229006284daeb4/traje-de-bano-surf-mujer.jpg?format=auto&quality=40&f=800x800', price: '$27.000', title: 'Traje de baño surf mujer', stock: 3 },
    { id: 19, imageSrc: 'https://contents.mediadecathlon.com/p2048909/k$989ea1e93e2e7bee86c9946d43e01f90/chaqueta-cortaviento-running-kalenji-run-wind-mujer-negro.jpg?format=auto&quality=40&f=800x800', price: '$16.000', title: 'Cortavientos running mujer negro', stock: 3 },
    { id: 20, imageSrc: 'https://contents.mediadecathlon.com/p2005109/k$e665e3c6eedd7c41f159771e23642777/polera-trekking-mujer-mh100-lila.jpg?format=auto&quality=40&f=800x800', price: '$8.000', title: 'Polera mujer mh100', stock: 3 },
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
  <div className="mujer-deportista-page">
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


export default MujerDeportistaPage;