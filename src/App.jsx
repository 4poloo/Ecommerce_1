import React from 'react'
import Navbar from "./components/Navbar/Navbar"
import Principal from './components/Principal/Principal'
import Productos from './components/Productos/Productos'
import AOS from"aos"
import "aos/dist/aos.css"

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
    <div>
      <Navbar />
      <Principal />
      <Productos />
    </div>
  )
}

export default App