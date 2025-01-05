import React from 'react';
import './VideoSection.css';
import MainVideo from '../assets/Videos/NaturePageVideo.mp4';
const VideoSection = () => {
  return (
    <div className="video-section">
      <video autoPlay loop muted className="background-video">
        <source src={MainVideo} type="video/mp4" />
      </video>
      <div className="video-text">
        <h1>Penang</h1>
        <p>Doors open</p>
      </div>
    </div>
  );
};

export default VideoSection;