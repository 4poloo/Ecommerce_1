import React from "react";
import Fondo1 from "../../assets/Slide/Fondo1.png";
import Fondo2 from "../../assets/Slide/Fondo2.png";
import Fondo3 from "../../assets/Slide/Fondo3.png";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const ListaImagen = [
{
    id: 1,
    img: Fondo1,
    title: "Todo en productos de higiene",
    descripcion:"Descubre nuestra selección de productos de aseo personal que combinan calidad y efectividad. Todo lo que necesitas para sentirte limpio y fresco, ¡todos los días!",
},
{
    id: 2,
    img: Fondo2,
    title: "Lleva Más, Paga Menos en tu tienda Favorita",
    descripcion: "Encuentra lo que necesitas para el día a día y aprovecha las mejores ofertas en productos esenciales.",
},
{
    id: 3,
    img: Fondo3,
    title: "Confianza en cada producto",
    descripcion:"Calidad garantizada en cada artículo que ofrecemos. Descubre productos confiables para el cuidado de tu hogar y bienestar personal.",
},
];

const Principal = ({ handleOrderPopup }) => {
    var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 850,
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5500,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    initialSlide: 0,
    };

    return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
      {/* Patron de fondo */}
        <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      {/* Contenedor principal del slider */}
        <div className="container mx-auto pb-8 sm:pb-0">
            <Slider {...settings}>
                {ListaImagen.map((data) => (
                <div key={data.id}>
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        {/* Sección de texto */}
                        <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                            <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                                {data.title}
                            </h1>
                            <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" className="text-sm">
                                {data.descripcion}
                            </p>
                            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
                                <Link to="/catalogo" onClick={handleOrderPopup} className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-5 rounded-full">
                                    Ir a ver
                                </Link>
                            </div>
                        </div>
                        {/* Sección de imagen */}
                        <div key={data.id} className="order-1 sm:order-2">
                            <div data-aos="zoom-in" data-aos-once="true" className="relative z-10">
                                <img src={data.img} alt="" className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"/>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </Slider>
        </div>
    </div>
    );
};

export default Principal;
