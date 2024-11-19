import React, { useState, useEffect } from 'react';
import Barra from "./../../assets/BannerBar/BBar.jpg";
import Empresa1 from "./../../assets/Empresa/Empresa1.png";
import BG from "./../../assets/Empresa/BG.jpg";
import Empresa2 from "./../../assets/Empresa/Empresa2.png";
import Empresa3 from "./../../assets/Empresa/Empresa3.png";
import Slider from "react-slick";
import AOS from 'aos';
import 'aos/dist/aos.css';

const BannerImg = {
    backgroundImage: `url(${Barra})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
};

const ImagenData = [
    {
        id: 1,
        img: Empresa1,
    },
    {
        id: 2,
        img: Empresa2,
    },
    {
        id: 3,
        img: Empresa3,
    },
];

const AboutUs = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 850,
        slidesToScroll: 1,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
        initialSlide: 0,
        centerMode: false,
        variableWidth: false,
    };

    const BackgroundStyle = {
        backgroundImage: `url(${BG})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        opacity: "100%",
        padding: "50px 0",
    };

    return (
        <div className="min-h-[650px] flex flex-col items-center py-12 sm:py-0 ">
            {/* Título */}
            <div className="text-center w-full mt-12" data-aos="flip-left">
                <section id="aboutus" className='py-4 w-full relative' style={BannerImg}>
                    <h2 className="text-3xl font-bold dark:text-white text-gray-800">Acerca de Nosotros</h2>
                </section>
            </div>
            {/* Cuerpo con imagen de fondo */}
            <div className="w-full flex flex-col items-center justify-center" style={BackgroundStyle}>
                <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-8 max-w-6xl mx-auto px-4">
                    {/* Texto */}
                    <div className="flex flex-col gap-6 text-left max-w-md" data-aos="fade-down-left">
                        <h2 className="font-bold text-lg sm:text-xl text-white">Acerca de Nosotros</h2>
                        <p className="font-semibold text-sm sm:text-base text-white">
                            En <span className="font-semibold">[Nombre de la Empresa]</span>, trabajamos para ofrecerte los mejores artículos de aseo que garantizan la limpieza y el cuidado de tu hogar. 
                            Con una amplia variedad de productos de alta calidad, nos enfocamos en satisfacer las necesidades de nuestros clientes, brindándoles soluciones efectivas y accesibles para 
                            mantener un ambiente fresco, seguro y acogedor.</p>
                        <p className="font-semibold text-sm sm:text-base text-white">
                            Nuestra misión es simplificar tu vida diaria, proporcionándote productos confiables que cumplen con los más altos estándares de calidad. Desde detergentes y desinfectantes 
                            hasta accesorios esenciales para la limpieza, cada uno de nuestros artículos está diseñado para ayudarte a cuidar de tu hogar y de quienes lo habitan.</p>
                        <p className="font-semibold text-sm sm:text-base text-white">
                            Nos apasiona ser tu aliado en la creación de espacios limpios y saludables, porque entendemos que un hogar impecable no solo refleja orden, sino también bienestar.</p>
                        <p className="font-semibold text-sm sm:text-base text-white">
                            Gracias por confiar en nosotros para acompañarte en cada paso hacia un hogar más limpio.</p>
                    </div>
                    {/* Carrusel de imágenes */}
                    <div className="w-full sm:w-1/2 lg:w-[45%]" data-aos="fade-down-right">
                        <Slider {...settings}>
                            {ImagenData.map((data) => (
                                <div key={data.id} className="flex justify-center items-center">
                                    <img src={data.img} alt="" className="w-full max-w-[550px] h-auto object-contain mx-auto" />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default AboutUs;
