import React, { useState } from 'react';
import { useCart } from "../../Context/CartContext"
import emailjs from 'emailjs-com'


const Form = () => {
    const { cart } = useCart()

    // Función para generar el cuerpo del mensaje con los datos del carrito
    const generateEmailBody = () => {
    return cart
        .map(
            (product) =>
            `- ${product.title}: ${product.quantity} ${
                product.quantity > 1 ? "unidades" : "unidad"
            }`
        )
        .join("\n");
    };

    const [formData, setFormData] = useState({
        from_name: "",
        from_email: "",
        message: "",
    });

    // Función para manejar cambios en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault()
        
        // Incluye el mensaje del carrito en el mensaje final
        const finalMessage = `Productos seleccionados:\n\n${generateEmailBody()}\n\nMensaje del cliente:\n\n${formData.message}`
        
        const dataToSend = {
            ...formData,
            message: finalMessage,
        }
        emailjs
        .send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID, // ID del servicio
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // ID del template
            dataToSend,
            import.meta.env.VITE_EMAILJS_USER_ID // User ID de EmailJS
        )
        .then(() => {
            alert("Mensaje enviado correctamente");
            setFormData({ from_name: "", from_email: "", message: "" })
        })
        .catch((error) => {
            alert("Hubo un error al enviar el mensaje, intenta nuevamente.")
            console.error(error)
        })
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-semibold text-center mb-4">
                Solicitud de Productos
            </h1>
            <p className="text-center mb-6">
                Completa el formulario para enviar tu solicitud sobre los productos seleccionados.
            </p>
            <form onSubmit={handleSubmit} className="space-y-2 bg-white p-4 rounded-lg shadow-md dark:bg-gray-800 mt-8" >
                <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-white">
                        Nombre
                    </label>
                    <input type="text" name="from_name" value={formData.from_name} onChange={handleChange} required className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary block w-full sm:text-sm dark:border-gray-500 dark:bg-gray-800 dark:text-white" placeholder="Ejemplo: Leandro Flores Cabello"/>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-white">
                        Correo electrónico
                    </label>
                    <input type="email" name="from_email" value={formData.from_email} onChange={handleChange} required className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary block w-full sm:text-sm dark:border-gray-500 dark:bg-gray-800 dark:text-white" placeholder="Ejemplo: leandroflorescabello@gmail.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" aria-label="Correo electrónico" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-white">
                        Mensaje
                    </label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary block w-full sm:text-sm dark:border-gray-500 dark:bg-gray-800 dark:text-white" rows="5" placeholder="Cuéntanos cómo podemos ayudarte." />
                </div>
                <div>
                    <button type="submit" className="w-full py-2 px-4 bg-primary hover:bg-secondary text-white font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary" >
                        Enviar Mensaje
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form