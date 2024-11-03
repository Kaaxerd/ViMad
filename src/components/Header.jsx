import './HeaderFooter.css';

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <Link to="/">
                <img src="/path/to/vimad-logo.png" alt="ViMad" className="logo" />
            </Link>
            <nav className="nav-links">
                <Link to="/about">Sobre nosotros</Link>
                <Link to="/error">Error</Link>
            </nav>
        </header>
    );
};

export default Header;