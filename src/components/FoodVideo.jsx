import React from 'react'
import './VideoSection.css';
import MainVideo from '../assets/Videos/NaturePageVideo.mp4';
const FoodVideo = () => {
  return (
    <div className='video-section'>
      <video autoPlay loop muted className="background-video">
        <source src={MainVideo} type="video/mp4" />
      </video>
      <div className="video-text">
        <h1>Penang's Cuisine</h1>
        <p>Crave Forever</p>
      </div>
    </div>
  )
}

export default FoodVideo


