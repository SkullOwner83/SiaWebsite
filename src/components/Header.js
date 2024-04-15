import React, { useEffect } from 'react';
import { Link, BrowserRouter } from 'react-router-dom'
import ImgSiaLogo from '../images/sia-logo.svg';
import ImgSearch from '../images/search-icon.svg';

export const Header = () => {
    const NavbarLinks = ["INICIO", "SERVICIOS", "PRODUCTOS", "NOSOTROS", "CONTACTO"];
    
  return (
    <header>        
      {/* Logo and name of site web container */}
      <Link to="/inicio">
        <div className="Logo-Container">
          <img src={ImgSiaLogo}/>
          <p>SIA</p>
        </div>
      </Link>

      {/* Get each element from NavBar array and add it in navigation list menu */}          
        <ul className="Navbar-Container Centered-Container Flex-Row">
            {
              NavbarLinks.map(element => {
                return( <li key={element}>
                          <Link to={"/" + element.toLocaleLowerCase()} className="Link">{element}</Link>
                        </li>)
              })
            }
        </ul>

      {/* Search input text and button */}
      <div class="Search-Container Centered-Container">
        <input type="text" className="Search-TextBox"/>
        <img src={ImgSearch} className="Search-Icon"/>
      </div>
    </header>
  )
}
