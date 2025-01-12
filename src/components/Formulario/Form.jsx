import React, { useState } from "react";
import { useCart } from "../../Context/CartContext";
import emailjs from "emailjs-com";

const Form = () => {
    const { cart } = useCart();

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
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        // Incluye el mensaje del carrito en el mensaje final
        const finalMessage = `Productos seleccionados:\n\n${generateEmailBody()}\n\nMensaje del cliente:\n\n${formData.message}`;

        const dataToSend = {
            ...formData,
            message: finalMessage,
        };

        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID, // ID del servicio
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // ID del template
                dataToSend,
                import.meta.env.VITE_EMAILJS_USER_ID // User ID de EmailJS
            )
            .then(() => {
                alert("Mensaje enviado correctamente");
                setFormData({ from_name: "", from_email: "", message: "" });
            })
            .catch((error) => {
                alert("Hubo un error al enviar el mensaje, intenta nuevamente.");
                console.error(error);
            });
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-semibold text-center mb-4">
                Solicitud de Productos
            </h1>
            <p className="text-center mb-4">
                Por favor, revisa los productos seleccionados antes de enviar tu
                solicitud.
            </p>

            {/* Vista previa de productos en el carrito */}
            <div className="bg-gray-100 p-4 rounded-md bg-transparent border shadow-md mb-6">
                <h2 className="text-lg font-semibold mb-2">Productos seleccionados:</h2>
                {cart.length > 0 ? (
                    <ul className="list-disc pl-6">
                        {cart.map((product) => (
                            <li key={product.id}>
                                {product.title} - {product.quantity}{" "}
                                {product.quantity > 1 ? "unidades" : "unidad"}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No hay productos en el carrito.</p>
                )}
            </div>

            {/* Formulario */}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label
                        htmlFor="from_name"
                        className="block text-sm font-medium text-gray-400"
                    >
                        Nombre:
                    </label>
                    <input
                        type="text"
                        id="from_name"
                        name="from_name"
                        value={formData.from_name}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 bg-transparent rounded-md"
                    />
                </div>
                <div>
                    <label
                        htmlFor="from_email"
                        className="block text-sm font-medium text-gray-400"
                    >
                        Correo Electrónico:
                    </label>
                    <input
                        type="email"
                        id="from_email"
                        name="from_email"
                        value={formData.from_email}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 bg-transparent rounded-md"
                    />
                </div>
                <div>
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-400"
                    >
                        Mensaje Adicional:
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full p-2 border border-gray-300 rounded-md bg-transparent"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-primary/60 text-white py-2 px-4 rounded-md hover:bg-primary"
                >
                    Enviar Solicitud
                </button>
            </form>
        </div>
    );
};

export default Form;
