import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { BannerSlider } from "../Components/Slider";

import ImgComputers from "../Images/Gallery/Computers.jpg";
import ImgSoftware from "../Images/Gallery/Software.jpg";
import ImgServers from "../Images/Gallery/Servers.jpg";
import ImgNetworks from "../Images/Gallery/Networks.jpg";
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
import ImgAminsa from "../Images/Enterprises/Aminsa.png"

import { useFxParallax } from "../Functions";

export const Home = () => {
  const SliderItems = [
    <p>Nuestro trabajo es ayudar a brindar servicios de calidad.</p>,
    <p>Técnicos certificados para la resolución de requerimientos en soporte técnico.</p>,
    <p>¡Somos tu mejor aliado tecnológico!</p>,
  ]

  useFxParallax(".Banner-Container");

  //HTML section
  return (
    <div className="Home-Page">          
      {/* Main banner container */}
      <div className="Banner-Container Centered-Container">
        <Link className="Convencional-Button" to="/contacto">Contactanos</Link>
        <BannerSlider List={SliderItems}/>
      </div>

      <main>  
        {/* Cards of the services that we offer */}
        <section className="Services">
          <h1>¿Qué servicios ofrecemos?</h1>
          <div class="Grid-Wrap Image-Card">
            <div>
              <div className="Centered-Container">
                <p>Cómputo</p>
                <ul>
                  <li>Ensamble de equipos</li>
                  <li>Cambio de componentes</li>
                  <li>Venta de equipos</li>
                  <li>Mantenimiento</li>
                  <li>Reparación</li>
                </ul>
                <Link className="Convencional-Button" to="/servicios">ver más</Link>
              </div>
              <img src={ImgComputers}/>
            </div>

            <div>
              <div className="Centered-Container">
                <p>Software</p>
                <ul>
                  <li>Instalacion de programas</li>
                  <li>Optimizacion de sistema</li>
                  <li>Respaldo de información</li>
                  <li>Actualizaciones</li>
                </ul>
                <Link className="Convencional-Button" to="/servicios">ver más</Link>
              </div>
              <img src={ImgSoftware}/>
            </div>
            
            <div>
              <div className="Centered-Container">
                <p>Servidores</p>
                <ul>
                  <li>Instalación de servidores</li>
                  <li>Administracion de datos</li>
                  <li>Migración y actualización</li>
                  <li>Virtualización</li>
                </ul>
                <Link className="Convencional-Button" to="/servicios">ver más</Link>
              </div>
              <img src={ImgServers}/>
            </div>

            <div>
              <div className="Centered-Container">
                <p>Redes</p>
                <ul>
                  <li>Diseño de infraestructura</li>
                  <li>Configuracion de routers</li>
                  <li>Seguridad de redes</li>
                  <li>Auditoria y analisis</li>
                </ul>
                <Link className="Convencional-Button" to="/servicios">ver más</Link>
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

              <div className="Grid-Wrap Graphics">
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

          <div class="Flex-Wrap">     
            <img src={ImgEcoSolution}/>
            <img src={ImgAgroestime}/>
            <img src={ImgCiasa}/>
            <img src={ImgMatute}/>
            <img src={ImgPassport}/>
            <img src={ImgMartinezCano}/>
            <img src={ImgATIndustrial}/>
            <img src={ImgNagoya}/>
            <img src={ImgVGA}/>
            <img src={ImgAminsa}/>
          </div>
        </section>
      </main>
    </div>
  )
}
