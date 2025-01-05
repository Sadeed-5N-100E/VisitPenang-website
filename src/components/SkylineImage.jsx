import React from 'react';
import './SkylineImage.css';
import SkylineImg from '../assets/Skyline.png';
const SkylineImage = () => {
  return (
    <div className="skyline-image">
      <img src={SkylineImg} alt="Skyline" />
      
    </div>
  );
};

export default SkylineImage;