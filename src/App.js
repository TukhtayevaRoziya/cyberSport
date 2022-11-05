import Header from './components/header/Header'
import About from './components/about/About'
import TurnirHeader from './components/turnir/TurnirHeader';
import Photo from './components/photo/Photo';

import './App.css'
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <About />
      <TurnirHeader/>
      <Photo/>
      <Footer/>
    </div>
  )
}

export default App
