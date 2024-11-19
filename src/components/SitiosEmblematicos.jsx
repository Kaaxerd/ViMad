import React from 'react';
import './SitiosEmblematicos.css';
import { Link } from 'react-router-dom';

const sitios = [
    { id: 1, nombre: "Palacio Real", imagen: "/images/monumentos/palacio_real.jpg" },
    { id: 2, nombre: "Puerta de Alcalá", imagen: "/images/monumentos/puerta_alcala.jpg" },
    { id: 3, nombre: "Templo de Debod", imagen: "/images/monumentos/templo_debod.jpg" },
    { id: 4, nombre: "Catedral de la Almudena", imagen: "/images/monumentos/catedral_almudena.jpg" },
    { id: 5, nombre: "Plaza Mayor", imagen: "/images/monumentos/plaza_mayor.jpg" },
    { id: 6, nombre: "Fuente de Cibeles", imagen: "/images/monumentos/fuente_cibeles.jpg" },
    { id: 7, nombre: "Museo del Prado", imagen: "/images/monumentos/museo_prado.jpg" },
    { id: 8, nombre: "Puerta del Sol", imagen: "/images/monumentos/puerta_sol.jpg" },
    { id: 9, nombre: "Gran Vía",imagen: "/images/monumentos/gran_via.jpg" },
    { id: 10, nombre: "Teatro Real", imagen: "/images/monumentos/teatro_real.jpg" },
    { id: 11, nombre: "Parque del Retiro", imagen: "/images/monumentos/parque_retiro.jpg" },
    { id: 12, nombre: "Plaza de España", imagen: "/images/monumentos/plaza_espana.jpg" },
    { id: 13, nombre: "Real Basílica de San Francisco el Grande", imagen: "/images/monumentos/san_francisco.jpg" },
    { id: 14, nombre: "El Rastro", imagen: "/images/monumentos/rastro.jpg" },
    { id: 15, nombre: "Estadio Santiago Bernabéu",imagen: "/images/monumentos/bernabeu.jpg" },
    { id: 16, nombre: "Palacio de Cristal", imagen: "/images/monumentos/palacio_cristal.jpg" },
    { id: 17, nombre: "Museo Reina Sofía",imagen: "/images/monumentos/reina_sofia.jpg" },
    { id: 18, nombre: "Casa de Campo",  imagen: "/images/monumentos/casa_campo.png" },
    { id: 19, nombre: "Círculo de Bellas Artes", imagen: "/images/monumentos/circulo_bellas_artes.jpg" },
    { id: 20, nombre: "Museo Thyssen-Bornemisza", imagen: "/images/monumentos/thyssen.jpg" }

];

const SitiosEmblematicos = () => {
    return (
        <div className="sitios-grid">
            {sitios.map((sitio) => (
                <Link to={`/sitio/${sitio.id}`} key={sitio.id} className="tarjeta-link">
                    <div className="tarjeta">
                        <img src={sitio.imagen} alt={sitio.nombre} className="tarjeta-imagen" />
                        <div className="tarjeta-contenido">
                            <h3>{sitio.nombre}</h3>
                            <p>{sitio.descripcion}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default SitiosEmblematicos;