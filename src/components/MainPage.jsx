import React, { useState } from 'react';
import BookList from './BookList';
import SearchBar from './SearchBar';
import '../styles/MainPage.css';

function MainPage({ addToCart }) {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="main-page">
            <img src="/assets/General/logo RelatosdePapel.png" alt="Logo" className="main-page__logo"/>
            <SearchBar setSearchTerm={setSearchTerm}/>
            <BookList searchTerm={searchTerm} addToCart={addToCart}/>
        </div>
    );
}

export default MainPage;