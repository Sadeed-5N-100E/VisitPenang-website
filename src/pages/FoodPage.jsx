import React from 'react'
import Navbar from '../components/Navbar'
import FoodVideo from '../components/FoodVideo'
import CardsSlider from '../components/CardsSlider'
const FoodPage = () => {
  return (
    <div>
      <Navbar/>
      <FoodVideo/>
        <h2 style={{marginTop: "2rem", textAlign: "center",fontSize: "2rem",fontWeight: "bold"}}> Food and Beverages</h2>
      <CardsSlider/>
    </div>
  )
}

export default FoodPage
