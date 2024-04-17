import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import ImgComputers from "../Images/Computers.jpg";
import ImgSoftware from "../Images/Software.jpg";
import ImgServers from "../Images/Servers.jpg";
import ImgNetworks from "../Images/Networks.jpg";
import ImgExperience from "../Images/Home/Experience.svg";
import ImgClients from "../Images/Home/Clients.svg";
import ImgRepairs from "../Images/Home/Repairs.svg";
import ImgHours from "../Images/Home/Hours.svg";

import ImgCiasa from "../Images/Enterprises/Ciasa.png";
import ImgMatute from "../Images/Enterprises/Matute.png";
import ImgPassport from "../Images/Enterprises/Passport.png";
import ImgAgroestime from '../Images/Enterprises/Àgroestime.png';
import ImgEcoSolution from "../Images/Enterprises/Eco Solution.png";
import ImgMartinezCano from "../Images/Enterprises/Martinez Cano.png";
import ImgATIndustrial from "../Images/Enterprises/AT Industrial.png";
import ImgNagoya from "../Images/Enterprises/Nagoya.png";
import ImgVGA from "../Images/Enterprises/VGA.png";

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
        <button className="Convencional-Button">Contactanos</button>
        <div>
          <p>Nuestro trabajo es ayudar a brindar servicios de calidad.</p>
          {/* <p>Técnicos certificados para la resolución de requerimientos en soporte técnico.</p> */}
          {/* <p>¡Somos tu mejor aliado tecnológico!</p> */}
        </div>
      </div>

      <main>  
        {/* Cards of the services that we offer */}
        <section className="Services">
          <h1>¿Qué servicios ofrecemos?</h1>
          <div class="Grid-Gallery">
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
                  <li>Diseño de infraestructura</li>
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
            <section className="WhyChooseUs">
              <h2>¿Por qué elegirnos?</h2>
              <p>Nos esforzamos por brindar soluciones de la más alta calidad, respaldadas por conocimientos técnicos sólidos y experiencia demostrada. Además, abrazamos la innovación y adoptamos las últimas tecnologías para ofrecer soluciones avanzadas que impulsen el éxito de nuestros clientes.</p>

              <div className="Grid-Gallery Graphics">
                <div>
                  <img src={ImgExperience}/>
                  <p className="Title">+20 años</p>
                  <p>Experiencia</p>
                </div>

                <div>
                  <img src={ImgRepairs}/>
                  <p className="Title">+1,000</p>
                  <p>Reparaciones realizadas</p>
                </div>

                <div>
                  <img src={ImgClients}/>
                  <p className="Title">+3000</p>
                  <p>Clientes satisfechos</p>
                </div>

                <div>
                  <img src={ImgHours}/>
                  <p className="Title">+10,000</p>
                  <p>Horas de servicio</p>
                </div>
              </div>
            </section>
        </div>

        {/* Our clients section */}
        <section className="OurClients">
          <h3>Nuestros clientes</h3>
          {/* <p>Varias empresas y negocios del estado de aguascalientes, confian en nosotros.</p> */}

          <div class="Grid-Gallery Graphics">     
            <div><img src={ImgEcoSolution}/></div>     
            <div><img src={ImgAgroestime}/></div>     
            <div><img src={ImgCiasa}/></div>     
            <div><img src={ImgMatute}/></div>     
            <div><img src={ImgPassport}/></div>     
            <div><img src={ImgMartinezCano}/></div>
            <div><img src={ImgATIndustrial}/></div>
            <div><img src={ImgNagoya}/></div>
            <div><img src={ImgVGA}/></div>
          </div>
        </section>
      </main>
    </div>
  )
}
