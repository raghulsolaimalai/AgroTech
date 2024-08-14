import React, { createContext, useState, useContext } from 'react';

// Create the CartContext
const CartContext = createContext();

// CartProvider component to provide cart context to its children
const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Add an item to the cart
    const addToCart = (item) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                return prevItems.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            }
            return [...prevItems, { ...item, quantity: 1 }];
        });
    };

    // Remove an item from the cart
    const removeFromCart = (itemId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    };

    // Clear the cart
    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use the CartContext
const useCart = () => {
    return useContext(CartContext);
};

export { CartProvider, useCart };
