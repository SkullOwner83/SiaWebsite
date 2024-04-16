import React from 'react'

export const Contact = () => {
  return (
    <main className="Contact-Page">
      <section>
        {/* Contact text */}
        <div className="Centered-Container">
          <h1>Contactanos</h1>
          <p>Para brindarte más información.</p>
          
          <article>
            <p>Llena nuestro formulario para que uno de nuestros especialistas se ponga en contacto contigo y podamos agendar tu consultoría gratuita</p>
          </article>
        </div>

        {/* Client data form */}
        <form>
          <label for="Name">Nombre completo</label>
          <input type="text" id="Name"/>

          <label for="Email">Correo electrónico</label>
          <input type="text" id="Email"/>

          <label for="NumberPhone">Número de telefono</label>
          <input type="text" id="NumberPhone"/>

          <label for="Problem">Describenos tu problema</label>
          <input type="text" id="Problem"/>

          <input type="submit" className="Convencional-Button"/>
        </form>
      </section>
    </main>
  )
}
