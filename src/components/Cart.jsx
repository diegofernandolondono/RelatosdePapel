import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Cart.css';

function Cart({ cartItems, removeFromCart }) {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    const navigate = useNavigate();

    const handleRemove = (id) => {
        // Filtra los items del carrito para eliminar el que coincide con el id
        const updatedCart = cartItems.filter(item => item.id !== id);
        // Llama a la función removeFromCart pasada como prop para actualizar el estado en el componente padre
        removeFromCart(updatedCart);
    };

    useEffect(() => {
        if (cartItems.length === 0) {
            // Si el carrito queda vacío, espera 3 segundos y regresa a la página principal
            const timer = setTimeout(() => {
                navigate('/main');
            }, 3000);
            return () => clearTimeout(timer); // Limpia el timer si el componente se desmonta
        }
    }, [cartItems, navigate]);

    return (
        <div className="cart">
            <img src="/assets/General/logo RelatosdePapel.png" alt="Logo" className="cart-page__logo"/>
            <h2 className="cart__title">Carrito de Compras</h2>
            {cartItems.length === 0 ? (
                <p className="cart__text">No hay libros en el carrito. Redirigiendo a la página principal...</p>
            ) : (
                <>
                    {cartItems.map(item => (
                        <div key={item.id} className="cart__item">
                            <p>{item.title} - ${item.price.toLocaleString()}</p>
                            <button onClick={() => handleRemove(item.id)}>Eliminar</button>
                        </div>
                    ))}
                    <p className="cart__total">Total: ${total.toLocaleString()}</p>
                    <Link to="/checkout" className="cart__link">Proceder al pago</Link>
                </>
            )}
        </div>
    );
}

export default Cart;