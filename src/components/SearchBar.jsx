import React from 'react';
import '../styles/SearchBar.css';

function SearchBar({ setSearchTerm }) {
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="search-bar">
            <img src="/assets/General/Buscar32.png" alt="Buscar" className="search-bar__icon"/>
            <input
                type="text"
                className="search-bar__input"
                placeholder="Buscar por título..."
                onChange={handleSearch}
            />
        </div>
    );
}

export default SearchBar;