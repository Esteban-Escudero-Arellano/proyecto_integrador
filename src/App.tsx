// App.tsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import BasketPage from './BasketPage';
import LoginPage from './LoginPage';
import MujerDeportistaPage from './MujerDeportistaPage'; 
import HombreDeportistaPage from './HombreDeportistaPage'; 
import NiñosDeportistasPage from './NiñosDeportistasPage'; 
import AccesoriosDeportivosPage from './AccesoriosDeportivos';
import DescuentosPage from './DescuentosPage';
import RegistroPage from './RegistroPage';

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
          <Link to="/login">
            <img src={checkImage} alt="check" />
          </Link>
        </div>
        <div className="basket-button">
          <Link to="/basket">
            <img src={basketImage} alt="basket" />
          </Link>
        </div>
      </div>

      <div className="image-container">
        <div className="image">
          <img src={images[currentImage]} alt="Imagen" />
        </div>
      </div>

      <div className="buttons-container">
        <Link to="/mujer-deportista" className="custom-link">
          <ImageButton onClick={() => console.log('Botón 1 clickeado')} imageSrc={mujerDeportista} buttonText="Mujer Deportista" />
        </Link>
        
        <Link to="/hombre-deportista" className="custom-link">
          <ImageButton onClick={() => console.log('Botón 2 clickeado')} imageSrc={hombreDeportista} buttonText="Hombre Deportista" />
        </Link>

        <Link to="/niños-deportistas" className="custom-link">
          <ImageButton onClick={() => console.log('Botón 3 clickeado')} imageSrc={niñosDeportistas} buttonText="Niños Deportistas" />
        </Link>

        <Link to="/accesorios-deportivos" className="custom-link">
          <ImageButton onClick={() => console.log('Botón 4 clickeado')} imageSrc={accesoriosDeportivos} buttonText="Accesorios Deportivos" />
        </Link>

        <Link to="/descuentos" className="custom-link">
          <ImageButton onClick={() => console.log('Botón 5 clickeado')} imageSrc={descuentos} buttonText="Descuentos" />
        </Link>          
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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registro" element={<RegistroPage />} /> {/* Nueva ruta para la página de registro */}
        <Route path="/mujer-deportista" element={<MujerDeportistaPage />} />
        <Route path="/hombre-deportista" element={<HombreDeportistaPage />} />
        <Route path="/niños-deportistas" element={<NiñosDeportistasPage />} />
        <Route path="/accesorios-deportivos" element={<AccesoriosDeportivosPage />} />
        <Route path="/descuentos" element={<DescuentosPage />} />
      </Routes>
    </Router>
  );
}

export default App;