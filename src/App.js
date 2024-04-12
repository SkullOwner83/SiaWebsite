import "./styles/styles.scss";
import { Header } from './components/Header';
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage';

function App() {
  const CurrentPage = "Home";
  
  return (
    <div className="App">
      <Header/>
      <div className="Header-Spacing"/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
