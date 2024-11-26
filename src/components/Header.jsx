import './HeaderFooter.css';

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <Link to="/">
                <img src="/images/vimad.png" alt="ViMad" className="logo" />
            </Link>
            <nav className="nav-links">
                <Link to="/">Inicio</Link>
                <Link to="/about">Sobre nosotros</Link>
                <Link to="/error">Error</Link>
            </nav>
        </header>
    );
};

export default Header;