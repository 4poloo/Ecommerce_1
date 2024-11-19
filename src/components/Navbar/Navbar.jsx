import React from "react";
import Logo from "../../assets/Navbar/Logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { Link } from 'react-router-dom'
import { Link  as ScrollLink} from 'react-scroll'

// Menú para la barra de navegación
const Menu=[
{
    id: 1,
    name: "Inicio",
    link: "Principal",
},
{
    id: 2,
    name: "Destacados",
    link: "PD",
},
{
    id: 3,
    name: "Acerca de nosotros",
    link: "aboutus",
},
{
    id: 4,
    name: "Contacto",
    link: "Contacto",
},
];

const DropdownLinks=[
{
    id: 1,
    name: "Desinfectantes",
    link: "#"
},
{
    id: 2,
    name: "Higiene personal",
    link: "#"
},
{
    id: 3,
    name: "Productos de limpieza",
    link: "#"
},
{
    id: 4,
    name: "Herramientas de aseo",
    link: "#"
},
];

const Navbar = () => {
    return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Top Navbar */}
        <div className="bg-primary/40 py-2">
        <section id="Principal"></section>
            <div className="container flex justify-between items-center">
            <div>
                <a href="#Principal" className="font-bold text-2xl sm:text-3xl flex gap-2">
                <img src={Logo} alt="Logo" className="w-10 uppercase" />
                NOMBRE EMPRESA
                </a>
            </div>
          {/* Barra de busqueda */}
                <div className="flex justify-between items-center gap-4">
                    <div className="relative group hidden sm:block">
                        <input
                            type="text"
                            placeholder="Buscar producto"
                            className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
                        />
                        <IoMdSearch className=" text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
                    </div>
                    {/* boton de compra */}
                    <button onClick={() => alert("no disponible aún")} className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group" >
                        <span className="group-hover:block hidden transition-all duration-200">Orden</span>
                        <FaCartShopping className=" text-xl text-white drop-shadow-sm cursor-pointer"/>
                    </button>
                    {/* DarkMode Switch */}
                    <div>
                        <DarkMode />
                    </div>
                </div>
            </div>
        </div>
        {/* Lower Navbar */}
        <div className="flex justify-center">
            <ul className="sm:flex hidden items-center">
                {
                    Menu.map((data)=>(
                        <li key={data.id}>
                            <ScrollLink to={data.link} smooth={true} duration={500} className="inline-block px-4 hover:text-primary duration-200">{data.name}</ScrollLink>
                        </li>
                    ))
                }
                {/* Menu drop */} 
                <li className="group relative cursor-pointer">
                    <a href="#" className="flex items-center gap-[2px] py-2">
                        Catálogo
                        <span>
                            <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                        </span>
                    </a>
                    <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md">
                        <ul>
                        {DropdownLinks.map((data)=>(
                                <li key={data.id}>
                                    <a href={data.link} className="inline-block w-f rounded-md p-2 hover:bg-primary/20">{data.name}</a>
                                </li>
                            ))
                            }
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    );
};

export default Navbar;
