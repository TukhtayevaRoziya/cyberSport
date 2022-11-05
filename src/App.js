import About from './components/about/About'
import Photo from './components/photo/Photo'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import TurnirHeader from './components/turnir/TurnirHeader'
import Registration from './components/registration/Registration'

import './App.css'
import OpenIconSpeedDial from './speedDeal.jsx/SpeedDeal'

function App() {
  return (
    <div>
        
      <Header />
      <About />
      <OpenIconSpeedDial/>
      <TurnirHeader />
      <Photo />
      <Registration />
      <Footer />
      
    </div>
  )
}

export default App
