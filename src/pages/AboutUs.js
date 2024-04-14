import React from 'react'
import ImgCommitment from '../images/Commitment.svg'
import ImgResponsability from '../images/Responsability.svg'
import ImgIntegrity from '../images/Integrity.svg'
import ImgInnovation from '../images/Innovation.svg'

export const AboutUs = () => {
  return (
    <div className="AboutUs-Page">
      <div className="Banner-Container Centered-Container">
        <p className="Centered-Container">¿Quienes Somos?</p>
      </div>

      <main>
        {/* About us section */}
        <section>            
            <article>
              <h1>Conoce un poco más de nosotros y nuestra experiencia.</h1>
              <p>Servicios Informáticos de Aguascalientes, es una empresa dedicada a la venta y reparación de equipos de cómputo desde 1999, ofreciendo servicios de mejora de rendimiento, mantenimiento preventivo y correctivo, tanto a equipos de escritorio, como portátiles, además de la instalación y configuración de software imprescindible para el trabajo diario.</p>
              <p>Brindamos soluciones informáticas integrales y de calidad, basadas en más de dos décadas de experiencia, para potenciar la productividad y eficiencia de nuestros clientes. Nuestro compromiso es ofrecer servicios de venta, reparación, mantenimiento y configuración de equipos de cómputo y sistemas, respaldados por un equipo experto y una pasión por la innovación tecnológica.</p>
            </article>
        </section>

        {/* Business identity section */}
        <section>
          {/* Mission and vision */}
          <div class="Cards-Container Simple-Cards">
            <div>
              <p className="Title">Misión</p>
              <p>Brindamos soluciones informáticas integrales y de calidad para potenciar la productividad y eficiencia de nuestros clientes.</p>
            </div>

            <div>
              <p className="Title">Vision</p>
              <p>Aspiramos a seguir siendo un referente confiable y ágil en el mundo de la informática, proporcionando servicios de vanguardia y manteniéndonos al día con las tendencias tecnológicas emergentes.</p>
            </div>
          </div>

          {/* Values */}
          <div className="Values">
            <div className="Centered-Container">
              <h2>Valores</h2>
            </div>

            <div className="Cards-Container">
              <div>
                <img src={ImgCommitment}/>
                <p>Compromiso</p>
              </div>

              <div>
                <img src={ImgResponsability}/>
                <p>Responsabilidad</p>
              </div>

              <div>
                <img src={ImgIntegrity}/>
                <p>Integridad</p>
              </div>

              <div>
                <img src={ImgInnovation}/>
                <p>Innovación</p>
              </div>
            </div>
          </div>
        </section>

        {/* Google map location frame */}
        <section>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3701.157818190111!2d-102.30104792488213!3d21.928483556269985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429ee576cd23617%3A0xb3947a42dfabc70c!2sServicios%20Informaticos%20de%20Aguascalientes!5e0!3m2!1ses-419!2smx!4v1713134630743!5m2!1ses-419!2smx" ></iframe>
        </section>
      </main>
    </div>
  )
}
