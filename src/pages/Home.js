import React from 'react'
import { useEffect } from 'react';

export const Home = () => {
  //Background image parallax effecto when scrolling
  useEffect(() => {
    const handleScroll = () => {
      const ImageContainer = document.querySelector('.Banner-Container');
      const ScrollPosition = window.scrollY;
      const ScrollVelocity = 0.5;
  
      //Adjust the background position to create the parallax effect
      ImageContainer.style.backgroundPosition = `center ${-ScrollPosition * ScrollVelocity}px`;
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  //HTML section
  return (
    <div className="Home-Page">          
      {/* Main banner container */}
      <div className="Banner-Container Centered-Container">
        <div className="Background-Black"/>
        <button>Contactanos ahora</button>
      </div>

      {/* Page body container */}
      <main>  
        {/* Info cards section */}
        <section>
          <div className="Cards-Container">
            <div>
              <span className="Cards-Icon"/>
              <p>Nos esforzamos por brindar soluciones de la más alta calidad, respaldadas por conocimientos técnicos sólidos y experiencia demostrada.</p>
            </div>

            <div>
              <span className="Cards-Icon"/>
              <p>Ponemos las necesidades de nuestros clientes en el centro de todo. Escuchamos y comprendemos para superar sus expectativas.</p>
            </div>

            <div>
              <span className="Cards-Icon"/>
              <p>Abrazamos la innovación y adoptamos las últimas tecnologías para ofrecer soluciones avanzadas que impulsen el éxito de nuestros clientes.</p>
            </div>

            <div>
              <span className="Cards-Icon"/>
              <p>Nos mantenemos en constante aprendizaje y desarrollo para estar al tanto de las últimas tendencias y mejores prácticas en tecnología informática.</p>
            </div>
          </div>
        </section>

        <section>
          <h2>¿Qué servicios ofrecemos?</h2>

          <p>Ensamblamiento de equipos</p>
          <p>Instalación de software</p>
          <p>Servidores</p>
          <p>Redes</p>
        </section>
      </main>
    </div>
  )
}
