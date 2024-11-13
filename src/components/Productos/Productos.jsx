import React from 'react'
import Card1 from "./../../assets/Cards/Card1.png"
import Card2 from "./../../assets/Cards/Card2.png"
import Card3 from "./../../assets/Cards/Card3.png"
import Card4 from "./../../assets/Cards/Card4.png"
import Card5 from "./../../assets/Cards/Card5.png"
import { FaStar } from "react-icons/fa6"
import { Link } from 'react-router-dom'

const Productosdata = [
    {
        id: 1,
        img:   Card1,
        title: "Esponja Cocina Virutex",
        rating: 5.0,
        Desc: "$2.490",
        aosDelay: "0",
        id_BD:0,            //id en la Base de Datos (agregar url + id)
    },
    {
        id: 2,
        img: Card2,
        title: "Pack Limpia pisos Excell",
        rating: 4.75,
        Desc: "$3.990",
        aosDelay: "200",
        id_BD:0,
    },
    {
        id: 3,
        img: Card3,
        title: "Lavaloza 1.5L Virginia",
        rating: 4.7,
        Desc: "$1.590",
        aosDelay: "400",
        id_BD:0,
    },
    {
        id: 4,
        img: Card4,
        title: "Pack Detergente Bio (2)",
        rating: 4,
        Desc: "$6.990",
        aosDelay: "600",
        id_BD:0,
    },
    {
        id: 5,
        img: Card5,
        title: "Toalla Multiusos Virtuex",
        rating: 4.5,
        Desc: "$2.990",
        aosDelay: "800",
        id_BD:0,
    },
]

const Productos = () => {
    return (
        <div className='mt-14 mb-12'>
            <div className='container'>
                {/* Seccion Cabecera */}
                <div className='text-center mb-10 max-w[600px] mx-auto'>
                    <section id='PD'>
                    <p data-aos="fade-up" className='text-sm text-primary'>Productos Destacados</p>
                    <h1 data-aos="fade-up" className='text-3xl font-bold'>Productos Hogar</h1>
                    <p data-aos="fade-up" className='text-xs text-gray-400'>Descubre nuestros productos destacados para el hogar, seleccionados para brindarte la mejor calidad y eficiencia en cada uso. Confía en nuestras recomendaciones para mantener tus espacios limpios y frescos, con opciones prácticas y económicas.</p>
                    </section>
                </div>
                {/* Cuerpo pagina */}
                <div>
                    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                        {/* Seccion de tarjetas */}
                        {Productosdata.map((data)=>(
                            <div key={data.id} className='space-y-3' data-aos="fade-up" data-aos-delay={data.aosDelay}>
                                <a href={data.id_BD}><img src={data.img} alt="" className='h-[170px] w-[180px] object-cover rounded-md' /></a>
                                <div>
                                    <a className='font-semibold' href='#' >{data.title}</a>
                                    <p className='text-sm text-gray-600'>{data.Desc}</p>
                                    <div className='flex items-center gap-1'>
                                        <FaStar className='text-yellow-400' />
                                        <span>{data.rating}</span>
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

export default Productos