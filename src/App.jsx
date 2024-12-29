import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import MainPage from './components/MainPage';
import BookDetail from './components/BookDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Footer from './components/Footer';
import useCustomHook from './hooks/useCustomHook'; // Importa el custom hook
import './styles/App.css';

function App() {
    const [cartItems, setCartItems] = useState([]);

    // Usa el custom hook para libros vendidos
    const { value: totalSold, increment: incrementTotalSold, reset: resetTotalSold } = useCustomHook(0);

    const addToCart = (book) => {
        setCartItems([...cartItems, book]);
    };

    const removeFromCart = (updatedCart) => {
        setCartItems(updatedCart); // Actualiza el estado del carrito con el nuevo array
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const onLogout = () => {
        // Aquí se agrega lógica para cerrar sesión
        resetTotalSold(); // Resetea el contador de libros vendidos a 0
        alert('Sesión cerrada');
        window.close(); // Cierra la página
    };

    return (
        <Router>
            <div className="app">
                <Header cartCount={cartItems.length} onLogout={onLogout} cartItems={cartItems} totalSold={totalSold} />
                <div className="app__container">
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/main" element={<MainPage addToCart={addToCart} />} />
                        <Route path="/book/:id" element={<BookDetail addToCart={addToCart} />} />
                        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
                        <Route path="/checkout" element={<Checkout cartItems={cartItems} clearCart={clearCart} incrementTotalSold={incrementTotalSold} />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;