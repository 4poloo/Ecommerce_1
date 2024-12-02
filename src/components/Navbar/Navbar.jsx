import React, {useState, useCallback} from "react";
import Logo from "../../assets/Navbar/Logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { Link, useLocation } from 'react-router-dom'
import { Link  as ScrollLink} from 'react-scroll'
import { useCart } from "../../Context/CartContext"
import { CiSquareRemove } from "react-icons/ci"

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
    const location = useLocation() // Detectar la ruta actual
    const { cart, decreaseQuantity, increaseQuantity, removeFromCart } = useCart(); // Obtener el carrito desde el contexto
    const [isCartVisible, setIsCartVisible] = useState(false); // Estado para mostrar el carrito

    // Aseguramos que la función de toggle solo se ejecute cuando se hace clic
    const toggleCartVisibility = useCallback(() => {
        setIsCartVisible((prev) => !prev); // Alterna la visibilidad del carrito
    }, []);

    return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Top Navbar */}
        <div className="bg-primary/40 py-2">
        <section id="Principal"></section>
            <div className="container flex justify-between items-center">
            <div>
                <Link to="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
                <img src={Logo} alt="Logo" className="w-10 uppercase" />
                NOMBRE EMPRESA
                </Link>
            </div>
          {/* Barra de busqueda */}
                <div className="flex justify-between items-center gap-4">
                    <div className="relative group hidden sm:block">
                        <input type="text" placeholder="Buscar producto" className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"/>
                        <IoMdSearch className=" text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
                    </div>
                    {/* boton de compra */}
                    <button onClick={toggleCartVisibility} className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group" >
                        <span className="group-hover:block hidden transition-all duration-200">Orden</span>
                        <FaCartShopping className=" text-xl text-white drop-shadow-sm cursor-pointer"/>
                        <span className="text-white ml-2">{cart.length}</span> {/* Muestra el número de productos en el carrito */}
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
                            {location.pathname === "/" ? (
                                // Enlace con desplazamiento suave en la página principal
                                <ScrollLink to={data.link} smooth={true} duration={500} className="inline-block px-4 hover:text-primary duration-200 cursor-pointer">
                                    {data.name}
                                </ScrollLink>
                            ) : (
                                // Enlace a la principal con hash de la sección
                                <Link to={`/#${data.link}`} className="inline-block px-4 hover:text-primary duration-200 cursor-pointer">
                                    {data.name}
                                </Link>
                            )}
                        </li>
                    ))
                }
                {/* Menu drop */} 
                <li className="group relative cursor-pointer">
                    <Link to="/catalogo" className="flex items-center gap-[2px] py-2">
                        Productos
                        <span>
                            <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                        </span>
                    </Link>
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
        {/* Mostrar carrito cuando esté visible */}
        <div className="relative">
            {isCartVisible && (
            <div className="absolute top-full right-0 bg-white p-4 shadow-lg rounded-md z-50 w-[350px] dark:bg-gray-800 dark:text-white text-black">
            <h3 className="font-semibold text-lg text-center flex items-center justify-center gap-2 mb-4">
                <FaCartShopping />
                Tu Carrito
            </h3>
            {cart.length > 0 ? (
                <>
                <ul className="space-y-4">
                    {cart.map((product) => (
                        <li key={product.id} className="flex items-center justify-between border-b border-gray-200 pb-2" >
                            {/* Nombre del producto */}
                            <span className="flex-1 truncate">{product.title}</span>
                            {/* Controles de cantidad */}
                            <div className="flex items-center gap-2">
                                <button onClick={() => decreaseQuantity(product.id)} className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-md dark:bg-gray-700 dark:hover:bg-primary/40 hover:bg-primary/40 " >
                                    -
                                </button>
                                <span className="w-8 text-center">{product.quantity}</span>
                                <button onClick={() => increaseQuantity(product.id)} className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-md dark:bg-gray-700 dark:hover:bg-primary/40 hover:bg-primary/40" >
                                    +
                                </button>
                            </div>
                                {/* Botón de eliminar */}
                                <button onClick={() => removeFromCart(product.id)} className="text-red-500 hover:text-red-700 transition-colors ml-4" >
                                    <CiSquareRemove size={20} />
                                </button>
                        </li>
                    ))}
                </ul>
                {/* Botón para ir al formulario */}
                    <div className="mt-4">
                        <Link to="/formulario" className="w-full bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-md text-center block" >
                            Solicitar productos
                        </Link>
                    </div>
                </>
            ) : (
                <p className="text-center">No hay productos en el carrito.</p>
            )}
            </div>
            )}
        </div>
    </div>
    );
};

export default Navbar;
