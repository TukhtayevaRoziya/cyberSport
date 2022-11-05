import About from './components/about/About'
import Photo from './components/photo/Photo'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Count } from './components/count/Count'
import OpenIconSpeedDial from './speedDeal.jsx/SpeedDeal'
import TurnirHeader from './components/turnir/TurnirHeader'
import Registration from './components/registration/Registration'

import 'antd/dist/antd.css'
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <About />
      <OpenIconSpeedDial />
      <TurnirHeader />
      <Photo />
      <Count />
      <Registration />
      <Footer />
    </div>
  )
}

export default App
