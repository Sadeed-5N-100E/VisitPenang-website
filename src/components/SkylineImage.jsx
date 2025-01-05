import React from 'react';
import './SkylineImage.css';
import SkylineImg from '../assets/Skyline.png';
import Logo from '../assets/logo.png'; // Make sure the logo is imported
const SkylineImage = () => {
  return (
    <div className="footer">
      <div className="footer-text">
        <img src={Logo} alt="Logo" className="footer-logo" />
        <div className="footer-links">
          <p>About our team</p>
          <p>Contact</p>
        </div>
      </div>
      <div className="skyline-image">
        <img src={SkylineImg} alt="Skyline" />
      </div>
    </div>
  );
};

export default SkylineImage;

