import '../App.css';
import SitiosEmblematicos from '../components/SitiosEmblematicos';
import './Home.css';

import React from 'react';

import Map from '../components/Map';

const Home = () => {
    return (
        <div>
            <div className="intro">
                <h1>Visita Madrid como nunca antes lo has hecho</h1>
                <p>Descubre los lugares más emblemáticos de la capital de España.</p>
            </div>

            <div className="sitios">
                <h2>Encuentra nuestros QR en</h2>

                {/* Mapa y a lo mejor una parte donde aparezcan los sitios con fotos asi bonito y tal */}
            </div>

            <div style={{ marginBottom: '50px' }}>
                {/* div en blanco para hacer un poco de espacio entre el contenido y el footer */}
            </div>
            <SitiosEmblematicos></SitiosEmblematicos> 
            <Map />
        </div>
    );
};

export default Home;