import React from 'react';
import { Link } from 'react-router-dom';
import mockData from '../data/mockData';
import '../styles/BookList.css';

function BookList({ searchTerm }) {
    const filteredBooks = mockData.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="book-list">
            {filteredBooks.map(book => (
                <div key={book.id} className="book-item">
                    <Link to={`/book/${book.id}`}>
                        <img src={book.image} alt={book.title} className="book-item__image" />
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                        <p className="book-item__price">${book.price.toLocaleString()}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BookList;