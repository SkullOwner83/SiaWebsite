import React, { useEffect } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import ImgSiaLogo from "../Images/sia-logo.svg";
import ImgSearch from "../Images/Icons/Search Icon.svg";
import ImgBurger from "../Images/Icons/Burger Menu.svg";

export const Header = () => {
    const NavbarLinks = ["INICIO", "SERVICIOS", "PRODUCTOS", "NOSOTROS", "CONTACTO"];
    
  return (
    <header>        
      {/* Logo and name of site web container */}
      <Link to="/inicio">
        <div className="Logo-Container">
          <img src={ImgSiaLogo}/>
        </div>
      </Link>

      {/* Get each element from NavBar array and add it in navigation list menu */}          
        <ul className="Navigation-Container Centered-Container Flex-Row">
            {
              NavbarLinks.map(element => {
                return( <li key={element}>
                          <Link to={"/" + element.toLocaleLowerCase()} className="Link">{element}</Link>
                        </li>)
              })
            }
        </ul>

      {/* Search input text and button */}
      <div class="Icons-Container Centered-Container Flex-Row">
        <input type="text" className="Search-TextBox"/>
        <img src={ImgSearch} className="Search-Icon"/>
      </div>
    </header>
  )
}
