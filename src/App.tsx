import React, { useState, useEffect } from 'react';
import './App.css';

import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import logoImage from './images/Logo.jpg';
import checkImage from './icons/check.png';
import basketImage from './icons/basket.png';


function App() {
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
        <div className="basket-button">
          <img src={basketImage} alt="basket" />
        </div>

      </div>
      <div className="image-container">
        <div className="image">
          <img src={images[currentImage]} alt="Imagen" />
        </div>
      </div>
    </div>
  );
}

export default App;