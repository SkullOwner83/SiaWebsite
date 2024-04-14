import React from 'react'

export const Footer = () => {
  return (
      <footer>
          <section className="Footer-Contact">
            <p>449 526 8740 | 449 915 6234</p>
            <p>Wahtsapp: 449 367 4547</p>
            <p>info@serviciosinformaticosdeags.com</p>
          </section>

          <section className="Footer-Navigation">
            <a href=""><p>Aviso de privacidad</p></a>
            <a href=""><p>Preguntas frecuentes</p></a>
            <a href=""><p>Valoranos</p></a>
          </section>

          <section className="Footer-About">
            <p>Av. Independencia #1926-A, Trojes de oriente, Aguascalientes</p>
            <p>Lunes a Viernes de 9:00 a 18:00 y Sabados de 9:00am a 13:00</p>
          </section>

          <section className="Footer-Copyright">
            <p>©2024 Servicios Informáticos de Aguascalientes</p>
          </section>
      </footer>
  )
}
