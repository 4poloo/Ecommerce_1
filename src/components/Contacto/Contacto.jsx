import React, { useState, useEffect, useCallback } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import emailjs from 'emailjs-com';

const containerStyle = {
    width: '400px',
    height: '400px',
};

const center = {
  lat: -33.3977317810058, // Latitud del mapa
  lng: -70.65267181396484 // Longitud del mapa
};

const Contacto = () => {
const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
});

const [map, setMap] = useState(null);
const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
});

const onLoad = useCallback((mapInstance) => {
    setMap(mapInstance);
}, []);

const onUnmount = useCallback(() => {
    setMap(null);
}, []);

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
        'service_3gv4tde',     // Reemplaza con tu Service ID de EmailJS
        'template_190lwnk',    // Reemplaza con tu Template ID de EmailJS
        formData,
        'FIIDAEVQNEqX_hVS9'    // Reemplaza con tu User ID de EmailJS
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

    if (!isLoaded) {
    return <div>Cargando mapa...</div>;
    }

    return (
        <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
            <div className='container'>
                <div className='text-center mb-10 max-w[600px] mx-auto'>
                <section id='Contacto'>
                    <h1 data-aos="fade-up" className='text-3xl font-bold'>Contacto</h1>
                </section>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
                    {/* Mapa con marcador */}
                    <div data-aos="fade-down-right" className='max-w-[400px] h-[350px] w-full mx-auto'>
                        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17} onLoad={onLoad} onUnmount={onUnmount}>
                            <Marker position={center} />
                        </GoogleMap>
                    </div>
                    <div>
                        {/* Descrpcion Contacto */}
                        <label>
                            Puedes acercarte a nuestro local para comprar y retirar, ademas de ver nuestras ofertas.
                            
                            Ubicacion: Arturo Rodriguez #2728, Recoleta , Santiago de Chile.
                            Horarios: 9:00 AM - 12:30 PM & 14:00 PM - 17.30 PM.
                            Celular: +56 964378329
                        </label>
                        {/* Seccion Formulario */}
                        <div data-aos="fade-down-left">
                            <form onSubmit={handleSubmit} className='space-y-4'>
                                <div>
                                    <label className='block text-sm font-medium text-gray-600'>Nombre</label>
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm'/>
                                </div>
                                <div>
                                    <label className='block text-sm font-medium text-gray-600'>Correo electrónico</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm'/>
                                </div>
                                <div>
                                    <label className='block text-sm font-medium text-gray-600'>Mensaje</label>
                                    <textarea name="message" value={formData.message} onChange={handleChange} required className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm'/>
                                </div>
                                <div>
                                    <button type="submit" className='w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
                                        Enviar Mensaje
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacto;
