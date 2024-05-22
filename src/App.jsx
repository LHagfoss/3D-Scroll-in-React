import { useState, useEffect } from 'react';
import images from './images';
import React from 'react';
import AcceptCookiesPopup from './AcceptCookiesPopup';
import Navbar from './Navbar';
import './App.css';

function App() {
  const [cards, setCards] = useState([]);

  const handleScroll = () => {
    const scrollPos = window.scrollY;
    const slider = document.querySelector('.slider');
    const initialTransform = `translate3d(-50%, -50%, 0) rotateX(0deg) rotateY(-25deg) rotate(-120deg)`;
    const zOffset = scrollPos * 0.5;
    slider.style.transform = `${initialTransform} translateY(${zOffset}px)`;
  };

  const handleMouseOver = (e) => {
    e.currentTarget.style.left = "15%";
  };
 
  const handleMouseOut = (e) => {
    e.currentTarget.style.left = "0%";
  };

  useEffect(() => {
    const newCards = images.map((image, index) => ({
      id: index + 1,
      imageSrc: image,
    }));

    setCards(newCards);

    window.addEventListener("scroll", handleScroll);
    return() => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AcceptCookiesPopup />
      <Navbar />
      <div className="slider">
        {cards.map((card) => (
          <div key={card.id} className='card' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <img src={card.imageSrc} alt={`image${card.id}`} draggable={false} />
          </div>
        ))};
      </div>
    </>
  );
};

export default App;