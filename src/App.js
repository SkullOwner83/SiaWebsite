import "./styles/styles.scss";
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';

function App() {
  const CurrentPage = "Home";
  
  return (
    <div className="App">
      <Header/>
      <div className="Header-Spacing"/>
      <HomePage/>
    </div>
  );
}

export default App;
