import '../App.css';
import './Home.css';

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="intro">
                <h1>Visita Madrid como nunca antes lo has hecho</h1>
                <p>Descubre los lugares más emblemáticos de la capital de España.</p>
            </div>

            <div className="sitios">
                <h2>Sitios emblemáticos</h2>
                <p>Algunos de los sitios más emblemáticos de Madrid:</p>

                {/* Mapa y a lo mejor una parte donde aparezcan los sitios con fotos asi bonito y tal */}

                <Link to="/bernabeu">
                    <button>Ir al Bernabéu</button>
                </Link>
            </div>

            <div style={{ marginBottom: '50px' }}>
                {/* div en blanco para hacer un poco de espacio entre el contenido y el footer */}
            </div>
        </div>
    );
};

export default Home;