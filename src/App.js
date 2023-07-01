import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Description from './Components/Description';
import Social from './Components/Social';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
     <Header/>
     <Home/>
     <Description/>
     <Social/>
     <Footer/>
    </div>
  );
}

export default App;