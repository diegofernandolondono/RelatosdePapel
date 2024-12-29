import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Checkout.css';

function Checkout({ cartItems, clearCart, incrementTotalSold  }) {
    const navigate = useNavigate();

    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const [formData, setFormData] = useState({
        fullName: '',
        department: '',
        city: '',
        neighborhood: '',
        address: '',
        phone: '',
        email: '',
    });

    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    const handlePayment = (e) => {
        e.preventDefault();
        setPaymentSuccess(true);
        incrementTotalSold(cartItems.length); // Incrementa el contador de libros vendidos
        setTimeout(() => {
            clearCart();
            navigate('/main');
        }, 2000);
    };

    const handleCancel = () => {
        if (window.confirm('¿Estás seguro de cancelar el pedido?')) {
            clearCart();
            navigate('/main');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'email' ? value.toLowerCase() : value.toUpperCase(),
        });
    };

    return (
        <div className="checkout">
            <img src="/assets/General/logo RelatosdePapel.png" alt="Logo" className="checkout-page__logo"/>
            <h2 className="checkout__title">Checkout</h2>
            {paymentSuccess ? (
                <p className="checkout__message">¡Pago exitoso! Redirigiendo...</p>
            ) : (
                <form onSubmit={handlePayment} className="checkout__form">
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Nombre completo"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="department"
                        placeholder="Departamento"
                        value={formData.department}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="city"
                        placeholder="Ciudad"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="neighborhood"
                        placeholder="Barrio"
                        value={formData.neighborhood}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Dirección"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Teléfono"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <p className="checkout__total">Cantidad de libros: {cartItems.length}</p>
                    <p className="checkout__total">Total a pagar: ${total.toLocaleString()}</p>
                    <button type="submit" className="checkout__button">Proceder al pago</button>
                    <button type="button" className="checkout__button checkout__button--cancel" onClick={handleCancel}>
                        Cancelar Pedido
                    </button>
                </form>
            )}
        </div>
    );
}

export default Checkout;