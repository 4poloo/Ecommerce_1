import React from 'react'
import Img1 from "../../assets/Cards/Card10.png"
import Img2 from "../../assets/Cards/Card12.png"
import Img3 from "../../assets/Cards/Card11.png"
import { FaStar } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const ProductosData=[
    {
        id: 1,
        img: Img1,
        title: "Cepillo de Dientes de Bambú Suave",
        description:"Cepillo de bambú suave con mango biodegradable, diseñado por odontólogos chilenos. Filamentos flexibles suaves que aseguran una limpieza eficiente. Con nano cobre que elimina el 99.9% de hongos y bacterias. Libre de BPA, vegano, y compostable.",
    },
    {
        id: 2,
        img: Img2,
        title: "Pasta Dental Luminous White",
        description:"Dientes un tono más blanco en 1 semana. Mediante el cepillado con Pasta Dental Colgate Luminous White vs. Pasta Dental regular con flúor.",
    },
    {
        id: 3,
        img: Img3,
        title: "Enjuague Bucal Plax Menta",
        description:"El enjuague bucal Colgate Plax Fresh Mint no contiene alcohol y ofrece una mayor sensación de limpieza vs solo el cepillado Tiene una frescura duradera y eficacia contra las bacterias. Elimina hasta 99,9% de bacterias.",
    },
]

const PD = () => {
    return (
        <div>
            <div className='container'>
                {/* Cabecera */}
                <div className="text-left mb-24">
                    <p data-aos="flip-up" data-aos-duration="600" className="text-sm text-primary">
                        Top Productos
                    </p>
                    <h1 data-aos="flip-up" data-aos-duration="600" className="text-3xl font-bold">
                        Destacados de la Semana
                    </h1>
                    <p data-aos="flip-up" data-aos-duration="600" className="text-xs text-gray-400">
                        Cada semana, seleccionamos productos que no te puedes perder. Échales un vistazo y encuentra algo especial para ti.
                    </p>
                </div>
                {/* Cuerpo */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
                    {ProductosData.map((data) => (
                        <div key={data.id} data-aos="zoom-in" className=' rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shado-xl duration-300 group max-w-[300px]'>
                            {/* Imagen */}
                            <div className='h-[100px]'>
                                <img src={data.img} alt="" className='max-w-[180px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md' />
                            </div>
                            {/* Descripcion */}
                            <div className='p-4 text-center'>
                            {/* Rating */}
                                <div className='w-full flex items-center justify-center gap-1'>
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                </div>
                                <h1 className='text-xl font-bold'>{data.title}</h1>
                                <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-5'>{data.description}</p>
                                <button className='bg-primary hover:*:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary' //onClick={handleOrderPopup}
                                >
                                    Comprar
                                </button>
                            </div>
                        </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default PD