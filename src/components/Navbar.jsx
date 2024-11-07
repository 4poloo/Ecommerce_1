import React from 'react'
import Logo from "../assets/Logo.png"

const Navbar = () => {
  return (
    <div>
        {/* Top Navbar */}
        <div>
            <div>
                <div>
                    <a href="#">
                        <img src={Logo} alt='Logo' />
                    </a>
                </div>
                {/* Barra de busqueda y boton de compra */}
                <div>
                    <div className='group'>
                        <input type='text' placeholder='Buscar producto' className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary' />
                    </div>
                </div>
            </div>
        </div>
        {/* Lower Navbar */}
        <div></div>
    </div>
  )
}

export default Navbar