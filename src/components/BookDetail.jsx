import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import mockData from '../data/mockData';
import '../styles/BookDetail.css';

function BookDetail({ addToCart }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const book = mockData.find(book => book.id === parseInt(id));
    const [showMessage, setShowMessage] = useState(false);

    const handleAddToCart = () => {
        addToCart(book); // Agrega el libro al carrito
        alert(`El libro: ${book.title} ha sido agregado al carrito.`); // Muestra una alerta con el nombre del libro
        setTimeout(() => {
            navigate('/main'); // Regresa a la página principal después de 3 segundos
        }, 3000);
    };

    return (
        <div className="book-detail">
            <img src={book.image} alt={book.title} className="book-detail__image" />
            <h2 className="book-detail__title">{book.title}</h2>
            <p className="book-detail__author">{book.author}</p>
            <p className="book-detail__description">{book.description}</p>
            <button className="book-detail__button" onClick={handleAddToCart}>
                Añadir al carrito
            </button>
        </div>
    );
}

export default BookDetail;