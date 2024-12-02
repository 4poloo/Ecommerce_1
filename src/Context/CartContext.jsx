import React, { createContext, useContext, useState, useCallback } from "react";

// Crear el contexto
const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Función para agregar productos al carrito
    const addToCart = useCallback((product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((p) => p.id === product.id);
            if (existingProduct) {
                // Si el producto ya está en el carrito, aumentar la cantidad
                return prevCart.map((p) =>
                    p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
                );
            }
            // Si el producto no está en el carrito, agregarlo
            return [...prevCart, { ...product, quantity: 1 }];
        });
    }, []);

    // Función para aumentar la cantidad de un producto
    const increaseQuantity = useCallback((id) => {
        setCart((prevCart) => {
            return prevCart.map((product) =>
                product.id === id ? { ...product, quantity: product.quantity + 1 } : product
            );
        });
    }, []);

    // Función para disminuir la cantidad de un producto
    const decreaseQuantity = useCallback((id) => {
        setCart((prevCart) => {
            return prevCart.map((product) =>
                product.id === id && product.quantity > 1
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
            );
        });
    }, []);

    // Función para eliminar un producto del carrito
    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((product) => product.id !== id));
    };

    // Valor que se pasa a los consumidores del contexto
    const value = {
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
    };
    
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Hook para usar el contexto
export const useCart = () => useContext(CartContext);
