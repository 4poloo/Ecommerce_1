import React, { useState, useEffect, useCallback } from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import emailjs from 'emailjs-com'
import Barra from "./../../assets/BannerBar/BBar.jpg"
import AOS from 'aos'; // Importa AOS si no está ya importado
import 'aos/dist/aos.css';

const containerStyle = {
    width: '400px',
    height: '400px',
}

const center = {
  lat: -33.3977317810058, // Latitud del mapa
  lng: -70.65267181396484 // Longitud del mapa
}

const BannerImg = {
    backgroundImage: `url(${Barra})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
    };

const Contacto = () => {
const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
})

const [map, setMap] = useState(null);
const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
})

const onLoad = useCallback((mapInstance) => {
    setMap(mapInstance);
}, [])

const onUnmount = useCallback(() => {
    setMap(null);
}, [])

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
}

const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,    // ID del servicio
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // ID del template
        formData,
        import.meta.env.VITE_EMAILJS_USER_ID    // Reemplaza con tu User ID de EmailJS (API)
    )
        .then(() => {
        alert('Mensaje enviado correctamente');
        setFormData({ name: '', email: '', message: '' });
        })
        .catch((error) => {
        alert('Hubo un error al enviar el mensaje, intenta nuevamente.');
        console.error(error);
        });
    };

    // Inicialización de AOS
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duración de las animaciones
            once: false, // Se ejecuta solo una vez al entrar en el viewport
        });
    }, []);

    if (!isLoaded) {
    return <div>Cargando mapa...</div>;
    }

    return (
        <div className="min-h-[650px] flex flex-col items-center py-12 sm:py-0">
            {/* Título */}
                <div className="text-center w-full" data-aos="zoom-in">
                    <section id="Contacto" className='py-4 w-full relative ' style={BannerImg}>
                        <h2 className="text-3xl font-bold dark:text-white text-gray-800">Contacto</h2>
                    </section>
                </div>
            <div className="container px-4">
            {/* Contenido */}
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-4">
            {/* Mapa con marcador */}
                <div className="w-full max-w-[400px] mx-auto lg:order-1 order-2 py-16" data-aos="fade-down-right">
                    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17} onLoad={onLoad} onUnmount={onUnmount}>
                        <Marker position={center} />
                    </GoogleMap>
                </div>
            {/* Texto y formulario */}
                <div className="flex flex-col gap-6 lg:order-2 order-1 mx-auto mt-4" data-aos="fade-down-left">
                {/* Descripción */}
                    <div className="font-semibold text-sm sm:text-base" >
                        <p>Puedes acercarte a nuestro local para comprar y retirar, además de ver nuestras ofertas.</p>
                        <p><strong>Ubicación:</strong> Arturo Rodriguez #2728, Recoleta, Santiago de Chile.</p>
                        <p><strong>Horarios:</strong> 9:00 AM - 12:30 PM & 14:00 PM - 17:30 PM.</p>
                        <p><strong>Celular:</strong> +56 964378329</p>
                    </div>
                {/* Formulario */}
                    <form  onSubmit={handleSubmit} className="space-y-2 bg-white p-4 rounded-lg shadow-md dark:bg-gray-800">
                        <div>
                            <label className="block text-sm font-medium text-gray-600 dark:text-white">Nombre</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary block w-full sm:text-sm dark:border-gray-500 dark:bg-gray-800 dark:text-white"/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600 dark:text-white">Correo electrónico</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary block w-full sm:text-sm dark:border-gray-500 dark:bg-gray-800 dark:text-white"/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600 dark:text-white">Mensaje</label>
                            <textarea name="message" value={formData.message} onChange={handleChange} required className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary block w-full sm:text-sm dark:border-gray-500 dark:bg-gray-800 dark:text-white" rows="5"/>
                        </div>
                        <div>
                            <button type="submit" className="w-full py-2 px-4 bg-primary hover:bg-secondary text-white font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                                Enviar Mensaje
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Contacto;
