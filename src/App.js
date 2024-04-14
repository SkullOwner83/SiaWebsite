import "./styles/styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from './components/Header';
import { Footer } from './components/Footer'
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { Services } from './pages/Services';
import { Products } from './pages/Products';
import { Contact } from './pages/Contact';
import { NoPage } from './pages/NoPage';

function App() {
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
