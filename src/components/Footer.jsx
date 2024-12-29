import React from 'react';
import '../styles/Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p className="footer__text">&copy; {currentYear} Proyecto: Relatos de Papel. Todos los derechos reservados.  DIEGO FERNANDO LONDOÑO MARÍN - MISSI</p>
        </footer>
    );
}

export default Footer;