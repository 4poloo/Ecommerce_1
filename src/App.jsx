import React from 'react'
import Navbar from "./components/Navbar/Navbar"
import Principal from './components/Principal/Principal'
import Productos from './components/Productos/Productos'
import PD from './components/ProductosDestacados/PD'
import Contacto from './components/Contacto/Contacto'
import AboutUs from './components/AboutUs/AboutUs'
import Footer from "./components/Footer/FT"
import Cat from './components/Catalogo/Cat'
import Form from './components/Formulario/Form'
import { CartProvider } from './Context/CartContext'
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
    <Router>
      <CartProvider>
        <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
          <Navbar/>
            <Routes>
              <Route path="/" element={
                <>
                <Principal />
                <Productos />
                <PD />
                <AboutUs />
                <Contacto />
                </>
              }/>
              <Route path="/catalogo" element={
                <>
                <Cat/>
                </>
              }
              />
              <Route path="/formulario" element={
                <>
                <Form/>
                </>
              }
              />
            </Routes>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  )
}

export default App