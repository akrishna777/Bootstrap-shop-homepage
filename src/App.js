import './css/styles.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Section from './components/Section'
import { useState } from 'react'

function App() {
  const [cart, setCart] = useState(0)

  return (
    <div>
      <Navbar cart={cart} setCart={setCart} />
      <Header />
      <Section cart={cart} setCart={setCart} />
      <Footer />
    </div>
  )
}

export default App
