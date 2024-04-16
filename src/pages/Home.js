import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import ImgComputers from '../images/Computers.jpg';
import ImgSoftware from '../images/Software.jpg';
import ImgServers from '../images/Servers.jpg';
import ImgNetworks from '../images/Networks.jpg';

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
          <button className="Keyboard-Button">Contactanos ahora</button>
      </div>

      <main>  
        {/* Cards of the services that we offer */}
        <section className="Services">
          <h1>¿Qué servicios ofrecemos?</h1>

          <div class="Cards-Container">
            <div className="Card">
              <div className="Centered-Container">
                <p>Cómputo</p>
                <ul>
                  <li>Ensamble de equipos</li>
                  <li>Cambio de componentes</li>
                  <li>Venta de equipos</li>
                  <li>Mantenimiento</li>
                  <li>Reparación</li>
                </ul>
                <button className="Convencional-Button">ver más</button>
              </div>
              <img src={ImgComputers}/>
            </div>

            <div className="Card">
              <div className="Centered-Container">
                <p>Software</p>
                <ul>
                  <li>Instalacion de programas</li>
                  <li>Optimizacion de sistema</li>
                  <li>Respaldo de información</li>
                  <li>Actualizaciones</li>
                </ul>
                <button className="Convencional-Button">ver más</button>
              </div>
              <img src={ImgSoftware}/>
            </div>
            
            <div className="Card">
              <div className="Centered-Container">
                <p>Servidores</p>
                <ul>
                  <li>Instalación de servidores</li>
                  <li>Administracion de datos</li>
                  <li>Migración y actualización</li>
                  <li>Virtualización</li>
                </ul>
                <button className="Convencional-Button">ver más</button>
              </div>
              <img src={ImgServers}/>
            </div>

            <div className="Card">
              <div className="Centered-Container">
                <p>Redes</p>
                <ul>
                  <li>Diseño de la red</li>
                  <li>Configuracion de routers</li>
                  <li>Seguridad de redes</li>
                  <li>Auditoria y analisis</li>
                </ul>
                <button className="Convencional-Button">ver más</button>
              </div>
              <img src={ImgNetworks}/>
            </div>
          </div>
        </section>

        {/* Why choose us section */}
        <div className="Background">
            <section>
              <h2>¿Por qué elegirnos?</h2>
              <p>Nos esforzamos por brindar soluciones de la más alta calidad, respaldadas por conocimientos técnicos sólidos y experiencia demostrada. Además, abrazamos la innovación y adoptamos las últimas tecnologías para ofrecer soluciones avanzadas que impulsen el éxito de nuestros clientes.</p>

              <div className="Cards-Container">
                <div>
                  <p>Experiencia</p>
                </div>

                <div>
                  <p>Reparaciones</p>
                </div>

                <div>
                  <p>Clientes</p>
                </div>

                <div>
                  <p>Horas</p>
                </div>
              </div>
            </section>
        </div>

        {/* Info cards section */}
        {/* <section>
          <div className="Cards-Container">
            <div>
              <span className="Cards-Icon"/>
              <p></p>
            </div>

            <div>
              <span className="Cards-Icon"/>
              <p>Ponemos las necesidades de nuestros clientes en el centro de todo. Escuchamos y comprendemos para superar sus expectativas.</p>
            </div>

            <div>
              <span className="Cards-Icon"/>
              <p>.</p>
            </div>

            <div>
              <span className="Cards-Icon"/>
              <p>Nos mantenemos en constante aprendizaje y desarrollo para estar al tanto de las últimas tendencias y mejores prácticas en tecnología informática.</p>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  )
}
