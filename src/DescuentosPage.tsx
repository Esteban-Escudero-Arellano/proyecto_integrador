import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DescuentosPage.css';
import Product from './Product'; 
import logo from './images/Logo.jpg'; 

const DescuentosPage: React.FC = () => {
  const navigate = useNavigate();
  const products = [
    { id: 81, imageSrc: 'https://contents.mediadecathlon.com/p2297777/k$05ca32eeb76cc64197c38bd388d678e9/kit-de-mancuernas-20-kg.jpg?format=auto&quality=40&f=800x800', price: '$60.000', title: 'Kit mancuernas 20 kg' },
    { id: 82, imageSrc: 'https://contents.mediadecathlon.com/p1306731/k$975f4eef9364c38f7c0830104652acac/polera-uv-surf-hombre-negro.jpg?format=auto&quality=40&f=800x800', price: '$5.000', title: 'Polera anti-uv hombre' },
    { id: 83, imageSrc: 'https://contents.mediadecathlon.com/p1732639/k$61174fa09302a228c3898af4ac7ae727/bicicleta-de-mtb-aro-24quote-18-velocidades-st500-negro.jpg?format=auto&quality=40&f=800x800', price: '$220.000', title: 'Bicicleta mtb niños st500 24" negro' },
    { id: 84, imageSrc: 'https://contents.mediadecathlon.com/p1832589/k$24d3390fcb31e494b59e70073a607a14/tabla-bodyboard-100-azul-leash-muneca.jpg?format=auto&quality=40&f=800x800', price: '$40.000', title: 'Bodyboard con leash 100' },
    { id: 85, imageSrc: 'https://contents.mediadecathlon.com/p1745734/k$42d6881ad01be6731701f949be4fcd7d/mini-piscina-plegable-ninos.jpg?format=auto&quality=40&f=800x800', price: '$26.000', title: 'Mini piscina plegable niños' },
    { id: 86, imageSrc: 'https://contents.mediadecathlon.com/p2001815/k$7ee210ba1e190e9d7889b4c9d004832e/pack-de-speedball-1-mastil-2-raquetas-y-1-pelota-quoteturnball-strongquote.jpg?format=auto&quality=40&f=800x800', price: '$65.000', title: 'Pack speedball (1 mástil, 2 raquetas y 1 pelota) turnball strong negro/amarillo' },
    { id: 87, imageSrc: 'https://contents.mediadecathlon.com/p1562486/k$aaf9d3fac0676fb93b26c7f404e41fa7/set-de-protecciones-para-patinaje-y-skate-adultosfit500gris-x3.jpg?format=auto&quality=40&f=800x800', price: '$18.000', title: 'Set de protecciones x3 negro fit500' },
    { id: 88, imageSrc: 'https://contents.mediadecathlon.com/p1931153/k$0ef1b4aebf8e9dfab61c4fd452671c7b/easy-set-de-badminton-3m-azul.jpg?format=auto&quality=40&f=800x800', price: '$32.000', title: 'Set de bádminton 3m' },
    { id: 89, imageSrc: 'https://contents.mediadecathlon.com/p1099235/k$0bdaa2db3c232b59e2b5204eb70271f9/carpa-de-camping-familiar-air-seconds-family-41-xl-4-personas.jpg?format=auto&quality=40&f=800x800', price: '$250.000', title: 'Carpa inflable air seconds 4.1 4 personas' },
    { id: 90, imageSrc: 'https://contents.mediadecathlon.com/p1749361/k$96ca9266b4a34d7c1099b146f89eb230/silla-plegable-para-camping-basic.jpg?format=auto&quality=40&f=800x800', price: '$18.000', title: 'Silla plegable camping basic' },
    { id: 91, imageSrc: 'https://contents.mediadecathlon.com/p1294246/k$bf2b8d5ca5ec7f541d15d1e442d1a33e/chaleco-de-natacion-swimvest-azul-verde.jpg?format=auto&quality=40&f=800x800', price: '$22.000', title: 'Chaleco natación swimvest+ 15-25 kg' },
    { id: 92, imageSrc: 'https://contents.mediadecathlon.com/p1529203/k$f85876554bc1862f7c8d79cb67bd8137/kit-tiro-al-arco-softarchery100.jpg?format=auto&quality=40&f=800x800', price: '$50.000', title: 'Kit tiro con arco softarchery 100' },
    { id: 93, imageSrc: 'https://contents.mediadecathlon.com/p2630656/k$3b2fc17dafd5ca480ab95a79633919bf/short-deportivo-hombre-verde.jpg?format=auto&quality=40&f=800x800', price: '$10.000', title: 'Short training hombre fst120 azul' },
    { id: 94, imageSrc: 'https://contents.mediadecathlon.com/p1242455/k$1bd046af896229e66d704625a98f946d/lentes-natacion-100-xbase-print-rosa-dorado-talla-l.jpg?format=auto&quality=40&f=800x800', price: '$4.000', title: 'Lentes de natación xbase100 l' },
    { id: 95, imageSrc: 'https://contents.mediadecathlon.com/p2035505/k$45b47febd20259ff20948498a3e557bd/pack-de-speedball-1-mastil-2-raquetas-y-1-pelota-quoteturnball-grisslashazulquote.jpg?format=auto&quality=40&f=800x800', price: '$45.000', title: 'Pack de speedball (1 mástil, 2 raquetas y 1 pelota) turnball negro/amarillo' },
    { id: 96, imageSrc: 'https://contents.mediadecathlon.com/p1901285/k$31201ec8e37694957c77c63930995e66/polera-deportiva-hombre-100-negro.jpg?format=auto&quality=40&f=800x800', price: '$5.000', title: 'Polera hombre 100 negro' },
    { id: 97, imageSrc: 'https://contents.mediadecathlon.com/p1077308/k$5a51a207056b93760ab4c958ba41bc0a/piscina-ninos-tidipool-azul-con-bolso-de-transporte-hermetico.jpg?format=auto&quality=40&f=800x800', price: '$17.000', title: 'Piscina plegable niños' },
    { id: 98, imageSrc: 'https://contents.mediadecathlon.com/p2153971/k$fa44385224a53523e829fd28b06e52a2/arco-de-futbol-500-talla-l.jpg?format=auto&quality=40&f=800x800', price: '$170.000', title: 'Arco de fútbol sg500 talla l classic' },
    { id: 99, imageSrc: 'https://contents.mediadecathlon.com/p2075830/k$0491f12942d12720c62ef41f15f96525/patines-4-ruedas-quad100-blanco.jpg?format=auto&quality=40&f=800x800', price: '$50.000', title: 'Patines quad artístico adulto blanco 100' },
    { id: 100, imageSrc: 'https://contents.mediadecathlon.com/p1616195/k$a5e670efadbdc6106381aab8cad90e66/arco-de-futbol-sg-500-talla-m-azul-marinoslashnaranja.jpg?format=auto&quality=40&f=800x800', price: '$80.000', title: 'Arco de fútbol sg500 talla m' },
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

