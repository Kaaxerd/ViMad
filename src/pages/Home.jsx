import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="intro">
                <h1>Conoce Madrid</h1>
            </div>

            <div className="sitios">
                <h2>Sitios emblemáticos</h2>
                <p>Algunos de los sitios más emblemáticos de Madrid:</p>

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