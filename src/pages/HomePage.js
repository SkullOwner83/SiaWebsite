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
    <div className="Home-Page">          
      <div className="HomeImage-Container Centered-Container">
        <div className="Background-Black"/>
        <button>Contactanos ahora</button>
      </div>

      <div class="Centered-Container">
        <div className="PageBody-Container">
          <section ClassName="Content-Container">
            <h1>¿Quiénes somos?</h1>
            <article>
              <p>Servicios Informáticos de Aguascalientes, es una empresa dedicada a la venta y reparación de equipos de cómputo desde 1999, ofreciendo servicios de mejora de rendimiento, mantenimiento preventivo y correctivo, tanto a equipos de escritorio, como portátiles, además de la instalación y configuración de software imprescindible para el trabajo diario.</p>
              <p>Brindamos soluciones informáticas integrales y de calidad, basadas en más de dos décadas de experiencia, para potenciar la productividad y eficiencia de nuestros clientes. Nuestro compromiso es ofrecer servicios de venta, reparación, mantenimiento y configuración de equipos de cómputo y sistemas, respaldados por un equipo experto y una pasión por la innovación tecnológica.</p>
            </article>
          </section>
      
          <section className="Content-Container">
            <div className="Cards-Container">
              <div>
                <p>Nos esforzamos por brindar soluciones de la más alta calidad, respaldadas por conocimientos técnicos sólidos y experiencia demostrada.</p>
              </div>
              <div>
                <p>Ponemos las necesidades de nuestros clientes en el centro de todo. Escuchamos y comprendemos para superar sus expectativas.</p>
              </div>
              <div>
                <p>Abrazamos la innovación y adoptamos las últimas tecnologías para ofrecer soluciones avanzadas que impulsen el éxito de nuestros clientes.</p>
              </div>
              <div>
                <p>Nos mantenemos en constante aprendizaje y desarrollo para estar al tanto de las últimas tendencias y mejores prácticas en tecnología informática.</p>
              </div>
            </div>
          </section>

          <section>
            <h2>¿Qué servicios ofrecemos?</h2>
          </section>
        </div>
      </div>
    </div>
  )
}
