import React, { useEffect } from 'react';
import ImgSiaLogo from '../images/sia-logo.svg';

export const Header = () => {
    const NavBar = ["INICIO", "SERVICIOS", "PRODUCTOS", "PRIVACIDAD", "CONTACTO", "SOPORTE"];
    
  return (
    <div>
        <header>          
          <img src={ImgSiaLogo} className="Sia-Logo"/>

            {/* Get each element from NavBar array and add it in navigation list menu */}
            <ul className="NavBar">
                {
                  NavBar.map(element => {
                    return(<li key={element}>{element}</li>)
                  })
                }
            </ul>

            <input id="Burger-Button" Type="checkbox"/>
        </header>
    </div>
  )
}
