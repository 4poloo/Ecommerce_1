import React from 'react'
import Navbar from "./components/Navbar/Navbar"
import Principal from './components/Principal/Principal'
import Productos from './components/Productos/Productos'
import PD from './components/ProductosDestacados/PD'
import Contacto from './components/Contacto/Contacto'
import AboutUs from './components/AboutUs/AboutUs'
import Footer from "./components/Footer/FT"
import AOS from"aos"
import "aos/dist/aos.css"
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'



const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
        <Navbar />
        <Principal />
        <Productos />
        <PD />
        <AboutUs />
        <Contacto />
        <Footer />
    </div>
  )
}

export default App