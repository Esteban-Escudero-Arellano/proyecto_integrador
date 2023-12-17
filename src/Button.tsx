// ImageButton.tsx
import React from 'react';

interface ButtonProps {
  onClick: () => void;
  imageSrc?: string;
  buttonText?: string;
}

const ImageButton: React.FC<ButtonProps> = ({ onClick, imageSrc, buttonText }) => {
  const handleClick = () => {
    onClick();
    // No hay alerta aquí, así que no se mostrará ningún mensaje
  };

  return (
    <div onClick={handleClick} className="styled-button">
      {imageSrc && <img src={imageSrc} alt="Botón" className="button-image" />}
    </div>
  );
};

export default ImageButton;
