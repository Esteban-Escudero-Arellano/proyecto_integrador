// App.tsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import BasketPage from './BasketPage';

import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import logoImage from './images/Logo.jpg';
import checkImage from './icons/check.png';
import basketImage from './icons/basket.png';
import mujerDeportista from './images/Mujer Deportista.jpg';
import hombreDeportista from './images/Hombre Deportista.jpg';
import niñosDeportistas from './images/Niños Deportistas.jpg';
import accesoriosDeportivos from './images/Accesorios Deportivos.jpg';
import descuentos from './images/Descuentos.jpg';

import ImageButton from './Button';

function Home() {
  const images = [image1, image2, image3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImage, images]);

  return (
    <div className="content">
      <div className="header">
        <div className="logo-container">
          <div className="logo">
            <img src={logoImage} alt="logo" />
          </div>
        </div>
        <div className="search-container">
          <div className="search-bar">
            <input type="text" placeholder="Buscar..." />
            <button>Buscar</button>
          </div>
        </div>
        <div className="login-button">
          <img src={checkImage} alt="check" />
        </div>
        <Link to="/basket" className="basket-button">
          <img src={basketImage} alt="basket" />
        </Link>
      </div>

      <div className="image-container">
        <div className="image">
          <img src={images[currentImage]} alt="Imagen" />
        </div>
      </div>

      <div className="buttons-container">
        <ImageButton onClick={() => console.log('Botón 1 clickeado')} imageSrc={mujerDeportista} buttonText="Mujer Deportista" />
        <ImageButton onClick={() => console.log('Botón 2 clickeado')} imageSrc={hombreDeportista} buttonText="Hombre Deportista" />
        <ImageButton onClick={() => console.log('Botón 3 clickeado')} imageSrc={niñosDeportistas} buttonText="Niños Deportistas" />
        <ImageButton onClick={() => console.log('Botón 4 clickeado')} imageSrc={accesoriosDeportivos} buttonText="Accesorios Deportivos" />
        <ImageButton onClick={() => console.log('Botón 5 clickeado')} imageSrc={descuentos} buttonText="Descuentos" />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<BasketPage />} />
      </Routes>
    </Router>
  );
}

export default App;
