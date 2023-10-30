import React from 'react'
import { useEffect } from 'react';

export const HomePage = () => {
  //Background image parallax effecto when scrolling
  useEffect(() => {
    const handleScroll = () => {
      const ImageContainer = document.querySelector('.HomeImage-Container');
      const ScrollPosition = window.scrollY;
      const ScrollVelocity = 0.5;

      //Adjust the background position to create the parallax effect
      ImageContainer.style.backgroundPosition = `center ${-ScrollPosition * ScrollVelocity}px`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  //HTML section
  return (
    <div>          
      <div className="HomeImage-Container Centered-Container">
        <div className="Background-Black"/>
        <p>Servicios Informaticos de Aguascalientes</p>
      </div>
    </div>
  )
}
