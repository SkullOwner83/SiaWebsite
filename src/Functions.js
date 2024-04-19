import React from 'react'
import { useEffect } from 'react';

export const useFxParallax = (Container = ".Banner-Container", ScrollVelocy = 0.5) => {
  //Background image parallax effecto when scrolling
  useEffect(() => {
    const handleScroll = () => {
      const ImageContainer = document.querySelector(Container);
      const ScrollPosition = window.scrollY;
      const ScrollVelocity = ScrollVelocy;
  
      //Adjust the background position to create the parallax effect
      ImageContainer.style.backgroundPosition = `center ${-ScrollPosition * ScrollVelocity}px`;
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);
}
