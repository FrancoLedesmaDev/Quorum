import './App.css';

/*Components*/
import Header from './Components/Header'
import Intro from './Components/Intro'
import About from './Components/About/About'
import Footer from './Components/Footer'



function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Footer />
    </div>
  );
}

export default App;
