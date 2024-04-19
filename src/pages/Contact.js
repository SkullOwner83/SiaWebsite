import React from 'react'

export const Contact = () => {
  return (
    <main className="Contact-Page">
      <div class="Solid-Background">
        <section>
          {/* Contact text */}
          <div>
            <h1>Contactanos</h1>
            <p>Para brindarte más información.</p>
            
            <article>
              <p>Llena nuestro formulario para que uno de nuestros especialistas se ponga en contacto contigo y podamos agendar tu consultoría gratuita</p>
              <p></p>
              <p>Lunes a Viernes de 9:00 a 18:00 y Sabados de 9:00am a 13:00</p>
              <p>Av. Independencia #1926-A, Trojes de oriente, Aguascaliente</p>
            </article>
          </div>

          {/* Client data form */}
          <form className="Card-Style">
            <label for="Name">Nombre completo</label>
            <input type="text" id="Name"/>
            <label for="Email">Correo electrónico</label>
            <input type="text" id="Email"/>
            <label for="NumberPhone">Número de telefono</label>
            <input type="text" id="NumberPhone"/>
            <label for="Message">Mensaje</label>
            <input type="text" id="Message"/>
            <input type="submit" className="Convencional-Button"/>
          </form>
        </section>
      </div>
    </main>
  )
}
