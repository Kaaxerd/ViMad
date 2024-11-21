import React from 'react';
import './SitiosEmblematicos.css';
import { Link } from 'react-router-dom';
import { sitios } from './sitiosData';


const SitiosEmblematicos = () => {
    return (
        <div className="sitios-grid">
            {sitios.map((sitio) => (
                <Link to={`/sitio/${sitio.id}`} key={sitio.id} className="tarjeta-link">
                    <div className="tarjeta">
                        <img src={sitio.imagen} alt={sitio.nombre} className="tarjeta-imagen" />
                        <div className="tarjeta-contenido">
                            <h3>{sitio.nombre.replace(/_/g, ' ')}</h3>
                            <p>{sitio.descripcion}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default SitiosEmblematicos;