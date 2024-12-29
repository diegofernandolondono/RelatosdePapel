import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Header.css';

function Header({ cartCount, onLogout, cartItems, totalSold }) {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        if (cartItems.length === 0) {
            onLogout(); // Cierra la sesión si el carrito está vacío
        } else {
            const confirmExit = window.confirm("Hay libros en el carrito. ¿Desea salir de todas formas?");
            if (confirmExit) {
                onLogout(); // Cierra la sesión si el usuario confirma
            } else {
                navigate('/main'); // Regresa a la página principal si el usuario cancela
            }
        }
    };

    return (
        <header className="header">
            <img src="/assets/General/Imagen header.png" alt="Header" className="header__top-image" />
            <div className="header__content">
                <h1 className="header__title">Relatos de Papel</h1>
                {location.pathname !== '/' && (
                    <>
                        <Link to="/cart" className="header__cart-link">
                            <img src="/assets/General/Carrito96.png" alt="Carrito" className="header__cart-icon"/>
                            {cartCount > 0 && <span className="header__cart-count">{cartCount}</span>}
                        </Link>
                        <button onClick={handleLogout} className="header__logout-button">Cerrar Sesión</button>
                        <p className="header__total-sold">Total Libros Vendidos Hoy: {totalSold}</p>
                    </>
                )}
            </div>
        </header>
    );
}

export default Header;