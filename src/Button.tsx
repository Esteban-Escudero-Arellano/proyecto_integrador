// Button.tsx
import React from 'react';

interface ButtonProps {
  onClick: () => void;
  imageSrc?: string;
  buttonText?: string; // Agregamos una nueva prop para el texto del botón
}

const ImageButton: React.FC<ButtonProps> = ({ onClick, imageSrc, buttonText }) => {
  const handleClick = () => {
    onClick();
    alert(`¡${buttonText} clickeado!`); // Mostrar un mensaje de alerta con el texto del botón
  };

  return (
    <div onClick={handleClick} className="styled-button">
      {imageSrc && <img src={imageSrc} alt="Botón" className="button-image" />}
    </div>
  );
};

export default ImageButton;
