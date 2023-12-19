import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AccesoriosDeportivosPage.css';
import Product from './Product'; 
import logo from './images/Logo.jpg'; 

const AccesoriosDeportivosPage: React.FC = () => {
  const navigate = useNavigate();

  const products = [
    { id: 61, imageSrc: 'https://contents.mediadecathlon.com/p1805392/k$57f8fdae1c9c57b5a1e51aadec4f993e/mochila-de-senderismo-nh100-10-litros-burdeo.jpg?format=auto&quality=40&f=452x452', price: '$4.000', title: 'Mochila nh arpenaz50 10 litros' },
    { id: 62, imageSrc: 'https://contents.mediadecathlon.com/p2192192/k$db12aa0765cc84ee54e9e85b860b9690/mochila-de-senderismo-en-la-naturaleza-nh100-30l-burdeo.jpg?format=auto&quality=40&f=452x452', price: '$20.000', title: 'Mochila nh arpenaz100 30 litros' },
    { id: 63, imageSrc: 'https://contents.mediadecathlon.com/p1976137/k$cc672829aa13939ab3be5c09f7c10a43/mochila-de-senderismo-naturaleza-nh100-20-l-beige.jpg?format=auto&quality=40&f=452x452', price: '$12.000', title: 'Mochila nh100 20 litros' },
    { id: 64, imageSrc: 'https://contents.mediadecathlon.com/p2206244/k$5fb73aaad3cc3ec63ae2f8c095ce8d97/mochila-de-senderismo-nh100-10-litros-burdeo.jpg?format=auto&quality=40&f=452x452', price: '$4.000', title: 'Mochila nh50 10 litros' },
    { id: 65, imageSrc: 'https://contents.mediadecathlon.com/p395566/k$6d52233e77877e40810401a0eb1cd36c/bolsa-de-fitness-plegable-30-l-blanca.jpg?format=auto&quality=40&f=800x800', price: '$6.000', title: 'Bolso plegable 30 litros' },
    { id: 66, imageSrc: 'https://contents.mediadecathlon.com/p1910552/k$2675062b2f37e486d7716a4867d6631a/casco-para-patines-skateboard-y-scooter-mf500-gris.jpg?format=auto&quality=40&f=800x800', price: '$20.000', title: 'Casco para patinar rosado mf500' },
    { id: 67, imageSrc: 'https://contents.mediadecathlon.com/p1758095/k$93edf4518b0a27bc91ff5244fca83f5b/mochila-de-senderismo-naturaleza-nh100-20-l-beige.jpg?format=auto&quality=40&f=800x800', price: '$12.000', title: 'Mochila nh100 20 litros' },
    { id: 68, imageSrc: 'https://contents.mediadecathlon.com/p1640075/k$309ea1182cc1ae93cd07f1c69bea2dcf/mochila-de-senderismo-nh100-10-litros-burdeo.jpg?format=auto&quality=40&f=800x800', price: '$4.000', title: 'Mochila nh arpenaz50 10 litros' },
    { id: 69, imageSrc: 'https://contents.mediadecathlon.com/p2245855/k$fda466dafee1c2e7846d53bb7d69de7f/bolso-deportivo-20-litros-azul.jpg?format=auto&quality=40&f=800x800', price: '$9.000', title: 'Bolso deportivo 20 litros azul' },
    { id: 70, imageSrc: 'https://contents.mediadecathlon.com/p1660271/k$5ad2b5b6dbdd708b39803b1e35f7bbce/mochila-montana-y-trekking-viaje-forclaz-t100-40-litros-negro.jpg?format=auto&quality=40&f=800x800', price: '$55.000', title: 'Mochila trekking 40 litros trek 100 negro' },
    { id: 71, imageSrc: 'https://contents.mediadecathlon.com/p1976043/k$7dcf58a0aa3186166987d6330afa86b4/mochila-de-senderismo-naturaleza-nh100-20-l-beige.jpg?format=auto&quality=40&f=800x800', price: '$12.000', title: 'Mochila nh100 20 litros' },
    { id: 72, imageSrc: 'https://contents.mediadecathlon.com/p1557049/k$60ae3678c3cc794fdc443067eeff9e2a/casco-para-patines-skateboard-y-scooter-mf500-gris.jpg?format=auto&quality=40&f=800x800', price: '$20.000', title: 'Casco patines skate scooter mf500' },
    { id: 73, imageSrc: 'https://contents.mediadecathlon.com/p2479216/k$f44ef7b430a5d7ef50486d3c2294ae58/lentes-de-sol-de-montana-y-trekking-mh140-categoria-3-adulto-negro.jpg?format=auto&quality=40&f=800x800', price: '$17.000', title: 'Lentes de sol trekking mh140 cat.3 negro' },
    { id: 74, imageSrc: 'https://contents.mediadecathlon.com/p2192176/k$d8b527010f8cb08dc3a3bc4e324c2893/mochila-de-senderismo-naturaleza-nh100-20-l-beige.jpg?format=auto&quality=40&f=800x800', price: '$12.000', title: 'Mochila nh100 20 litros' },
    { id: 75, imageSrc: 'https://contents.mediadecathlon.com/p1824183/k$eb996566777f713721aff9518d45bdac/rodilleras-para-voleibol-v300-negro.jpg?format=auto&quality=40&f=800x800', price: '$11.000', title: 'Rodilleras de voleibol vkp100 negro' },
    { id: 76, imageSrc: 'https://contents.mediadecathlon.com/p2192184/k$73fac5ca3df642f2be8c9390836af915/mochila-de-senderismo-naturaleza-nh100-20-l-beige.jpg?format=auto&quality=40&f=800x800', price: '$12.000', title: 'Mochila nh100 20 litros' },
    { id: 77, imageSrc: 'https://contents.mediadecathlon.com/p2479859/k$eacd57a91a892f02a227207662c9e7cb/bolso-de-transporte-viajes-de-trekking-en-montana-extension-de-40-a-60-l-caqui.jpg?format=auto&quality=40&f=800x800', price: '$65.000', title: 'Bolso trekking duffel500 extend 40/60 litros' },
    { id: 78, imageSrc: 'https://contents.mediadecathlon.com/p1302991/k$dd32cb3e80f5cb861216bb3324fc36c0/casco-para-patines-skateboard-y-scooter-b100-rosado.jpg?format=auto&quality=40&f=800x800', price: '$16.000', title: 'Casco para patinar niños b100 rosado' },
    { id: 79, imageSrc: 'https://contents.mediadecathlon.com/p1818463/k$baa228586f5fbb6b704d1cd0bd249caf/bolso-deporte-essentiel-55-litros-azul-marino.jpg?format=auto&quality=40&f=800x800', price: '$17.000', title: 'Bolso deportivo 55 litros negro' },
    { id: 80, imageSrc: 'https://contents.mediadecathlon.com/p2267758/k$eec3ffdeef43041efb1bad0ca014c281/mochila-essential-17-l.jpg?format=auto&quality=40&f=800x800', price: '$9.000', title: 'Mochila essential 17 l' },
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
