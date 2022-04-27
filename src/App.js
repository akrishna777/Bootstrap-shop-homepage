import './css/styles.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Section from './components/Section'
import { useState } from 'react'

function App() {
  const [cart, setCart] = useState(0)

  const handleReset = ({ isActive, setIsActive }) => {
    setCart(0)
    setIsActive(true)
  }

  return (
    <div>
      <Navbar cart={cart} setCart={setCart} handleReset={handleReset} />
      <Header />
      <Section cart={cart} setCart={setCart} handleReset={handleReset} />
      <Footer />
    </div>
  )
}

export default App
