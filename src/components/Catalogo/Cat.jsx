import React from 'react'
import { useCart } from "../../Context/CartContext"
import C1 from 	'./../../assets/Catalogo/C1.jpg'
import C2 from 	'./../../assets/Catalogo/C2.jpg'
import C3 from 	'./../../assets/Catalogo/C3.jpg'
import C4 from 	'./../../assets/Catalogo/C4.jpg'
import C5 from 	'./../../assets/Catalogo/C5.jpg'
import C6 from 	'./../../assets/Catalogo/C6.jpg'
import C7 from 	'./../../assets/Catalogo/C7.jpg'
import C8 from 	'./../../assets/Catalogo/C8.jpg'
import C9 from 	'./../../assets/Catalogo/C9.jpg'
import C10 from 	'./../../assets/Catalogo/C10.jpg'
import C11 from 	'./../../assets/Catalogo/C11.jpg'
import C12 from 	'./../../assets/Catalogo/C12.jpg'
import C13 from 	'./../../assets/Catalogo/C13.jpg'
import C14 from 	'./../../assets/Catalogo/C14.jpg'
import C15 from 	'./../../assets/Catalogo/C15.jpg'
import C16 from 	'./../../assets/Catalogo/C16.jpg'
import C17 from 	'./../../assets/Catalogo/C17.jpg'
import C18 from 	'./../../assets/Catalogo/C18.jpg'


const Productos = [
    {id: 1,img: C1,title: "Toallas Microfibra",aosDelay: "0",id_BD:0,},         //id_BD ---> es la id en la Base de Datos (agregar url + id)
    {id: 2,img: C2,title: "Secador de piso",aosDelay: "200",id_BD:0,},
    {id: 3,img: C3,title: "Rollo Confort",aosDelay: "400",id_BD:0,},
    {id: 4,img: C4,title: "Traje Overol",aosDelay: "600",id_BD:0,},
    {id: 5,img: C5,title: "Dispensador de Papel",aosDelay: "800",id_BD:0,},
    {id: 6,img: C6,title: "Viruta para Ollas",aosDelay: "0",id_BD:0,},
    {id: 7,img: C7,title: "Pastillas para Baño",aosDelay: "200",id_BD:0,},
    {id: 8,img: C8,title: "Toalla Microfibra con Ojal",aosDelay: "400",id_BD:0,},
    {id: 9,img: C9,title: "Confort 22 Mts",aosDelay: "600",id_BD:0,},
    {id: 10,img: C10,title: "Pulverizador",aosDelay: "800",id_BD:0,},
    {id: 11,img: C11,title: "Dispensador de Jabón",aosDelay: "0",id_BD:0,},
    {id: 12,img: C12,title: "Carro Estruja Mopa",aosDelay: "200",id_BD:0,},
    {id: 13,img: C13,title: "Guantes de Algodón ",aosDelay: "400",id_BD:0,},
    {id: 14,img: C14,title: "Paños Limpia Pisos",aosDelay: "600",id_BD:0,},
    {id: 15,img: C15,title: "Mopa / Trapero",aosDelay: "800",id_BD:0,},
    {id: 16,img: C16,title: "Guantes Cabritilla",aosDelay: "0",id_BD:0,},
    {id: 17,img: C17,title: "Dispensador de Papel",aosDelay: "200",id_BD:0,},
    {id: 18,img: C18,title: "Basurero Contenedor",aosDelay: "400",id_BD:0,},
]

const Cat = () => {

    const { addToCart } = useCart(); // Obtener la función para agregar al carrito

    const handleAddToCart = (product) => {
      addToCart(product); // Agregar el producto al carrito
    };

return (
        <div className='mt-4 mb-12'>
            <div className='container'>
                {/* Seccion Cabecera */}
                <div className='text-center mb-10 max-w[600px] mx-auto'>
                    <section id='PD'>
                    <p data-aos="fade-up" className='text-sm text-primary'>Productos</p>
                    <h1 data-aos="fade-up" className='text-3xl font-bold'>Todos los Productos</h1>
                    <p data-aos="fade-up" className='text-xs text-gray-400'>Descubre nuestros productos que tenemos disponible para ti</p>
                    </section>
                </div>
                {/* Cuerpo pagina */}
                <div>
                    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                        {/* Seccion de tarjetas */}
                        {Productos.map((data)=>(
                            <div key={data.id} className='space-y-3' data-aos="fade-up" data-aos-delay={data.aosDelay}>
                                <a href={data.id_BD}><img src={data.img} alt="" className='h-[170px] w-[180px] object-cover rounded-md' /></a>
                                <div className='text-center mt-6'>
                                    <a className='font-semibold' href='#' >{data.title}</a>
                                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
                                        <button onClick={() => handleAddToCart(data)} className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-5 rounded-full mt-2" >
                                            Comprar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cat