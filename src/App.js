import "./Styles/styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Home } from "./Pages/Home";
import { AboutUs } from "./Pages/AboutUs";
import { Services } from "./Pages/Services";
import { Products } from "./Pages/Products";
import { Contact } from "./Pages/Contact";
import { NoPage } from "./Pages/NoPage";

function App() {
  const [CurrentPage, SetCurrentPage] = useState("Home");

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="App"> 
      <BrowserRouter>
        <Header/>
        <div className="Header-Spacing"/>

        {/* Render the corresponding page based on its url */}
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/inicio" element={<Home/>}/>
          <Route path="/servicios" element={<Services/>}/>
          <Route path="/productos" element={<Products/>}/>
          <Route path="/nosotros" element={<AboutUs/>}/>
          <Route path="/contacto" element={<Contact/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Routes>
        
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
