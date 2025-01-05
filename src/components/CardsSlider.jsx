import React from 'react';
import './CardsSlider.css';
import Cendol from '../assets/FoodPics/Cendol.png';
import CharKT from '../assets/FoodPics/CharKT.png';
import HokkienMee from '../assets/FoodPics/HokkienMee.png';
import Laksa from '../assets/FoodPics/Laksa.png';
import TehLimao from '../assets/FoodPics/TehLimao.png';
import TehTarik from '../assets/FoodPics/TehTarik.png';
const CardsSlider = () => {
  const images = [
    { src: Cendol, title: 'Cendol',
      type: 'Dessert', description: 'Cendol, a beloved Penang dessert that brings the best of tropical flavors together. Shaved ice is generously topped with pandan-flavored green jelly, sweetened coconut milk, and palm sugar syrup, creating a balance of creamy and icy goodness.' },
    { src: CharKT,title: 'Char Kway Teow',
      type: 'Light meal', description: "Char Kway Teow is Penang's answer to stir-fried perfection. This dish features flat rice noodles stir-fried with prawns, Chinese sausage, eggs, bean sprouts, and a delicious mix of smoky, savory seasonings. It is Cooked on an open flame and often served with prawns. " },
    { src: HokkienMee,title: 'Hokkien Mee',
      type: 'Light meal', description: 'Hokkien Mee is a rich noodle soup that perfectly embodies Penang’s culinary soul. Mee is chinese for noodle and Hokkien is a dialect common in penang. Thick yellow noodles are simmered in a fragrant broth made from prawns and aromatic spices. It is topped with fresh prawns, boiled egg, and a dash of chili paste' },
    { src: Laksa,title: 'Laksa',
      type: 'Spicy soup', description: " Laksa is a spicy noodle soup popular in the Peranakan cuisine of Southeast Asia. Penang's Laksa is a fiery celebration of bold, zesty flavors! This iconic noodle soup is a blend of tangy tamarind, spicy chili, and aromatic herbs, served with thick rice noodles and topped with succulent fish or prawns. Whether you go for the rich and creamy Curry Laksa or the sour and spicy Asam Laksa, each spoonful is a flavor explosion that will leave you craving more." },
    { src: TehLimao,title: 'Teh Limau',
      type: 'Drink', description: '"The Zesty Refreshment" Escape the heat with a glass of Teh Limau, a refreshing blend of black tea and freshly squeezed lime. This tangy, citrusy drink is perfectly balanced with just the right amount of sweetness. Ideal for quenching your thirst on a hot day or pairing with spicy local dishes, Teh Limau is a quintessential Penang beverage that energizes and refreshes with every sip' },
    { src: TehTarik,title: 'Teh Tarik',
      type: 'Drink', description: "No visit to Penang is complete without experiencing Teh Tarik, Malaysia's famous \"pulled tea.\" Watch as skilled vendors pour this smooth, frothy milk tea from one glass to another. Teh Tarik is the perfect companion to your meals or a satisfying treat on its own. It’s a must-try drink that’s as iconic as Penang itself "},
  ];

  return (
    <div className="cards-slider">
      {images.map((image, index) => (
        <div key={index} className="card">
          <img src={image.src} alt={`Nature ${index + 1}`} />
          <h3>{image.title}</h3>
          <p>{image.description}</p>
          <div className="card-type">{image.type}</div> 
        </div>
      ))}
    </div>
  );
};

export default CardsSlider;