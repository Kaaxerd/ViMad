import React, { useState, useEffect } from 'react';
import './SitiosEmblematicos.css';
import { Link } from 'react-router-dom';
import { sitios } from './sitiosData';

const SitiosEmblematicos = () => {
    const [favoritos, setFavoritos] = useState([]);

    // Cargar favoritos del localStorage al montar el componente
    useEffect(() => {
        const favoritosGuardados = JSON.parse(localStorage.getItem('favoritos')) || [];
        setFavoritos(favoritosGuardados);
    }, []);

    // Manejar el like
    const handleLike = (id) => {
        let nuevosFavoritos;
        if (favoritos.includes(id)) {
            // Si ya está en favoritos, se elimina
            nuevosFavoritos = favoritos.filter((fav) => fav !== id);
        } else {
            // Si no está en favoritos, se añade
            nuevosFavoritos = [...favoritos, id];
        }
        setFavoritos(nuevosFavoritos);
        localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
    };

    return (
        <div className="sitios-grid">
            {sitios.map((sitio) => (
                <div key={sitio.id} className="tarjeta">
                    <Link to={`/sitio/${sitio.id}`} className="tarjeta-link">
                        <img src={sitio.imagen} alt={sitio.nombre} className="tarjeta-imagen" />
                        <div className="tarjeta-contenido">
                            <h3>{sitio.nombre.replace(/_/g, ' ')}</h3>
                            <p>{sitio.descripcion}</p>
                        </div>
                    </Link>
                    <button
                        className={`like-button ${favoritos.includes(sitio.id) ? 'liked' : ''}`}
                        onClick={() => handleLike(sitio.id)}
                    >
                        {favoritos.includes(sitio.id) ? '❤️' : '🤍'}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default SitiosEmblematicos;