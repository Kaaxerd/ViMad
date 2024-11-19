import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { sitios } from './sitiosData';
import 'leaflet/dist/leaflet.css';
import { useParams } from 'react-router-dom';
import L from 'leaflet';
import './DetalleSitio.css'
import QRGenerator from './QRGenerator';

const DetallesSitio = () => {
    const { id } = useParams();
    const sitio = sitios.find(s => s.id === parseInt(id));

    if (!sitio) {
        return <p>El sitio no se encuentra</p>;
    }

    const { nombre, descripcion, imagen, localizacion } = sitio;

    const customIcon = new L.Icon({
        iconUrl: '/images/localization.png',
        iconSize: [64, 64],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
    });

    return (
        <div className="detalles-sitio">
            <div className='title' style={{ 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imagen})`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                
            }}>
                <h1>{nombre}</h1>
            </div>
            
            <div className="descripcion">
                <div dangerouslySetInnerHTML={{ __html: descripcion }} className="texto"/>
            </div>

            <div className="map-wrapper">
                <MapContainer
                    center={[localizacion.latitud, localizacion.longitud]}
                    zoom={16}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[localizacion.latitud, localizacion.longitud]} icon={customIcon}>
                        <Popup>{nombre}</Popup>
                    </Marker>
                </MapContainer>
            </div>
            <QRGenerator id={id}></QRGenerator>
        </div>
    );
};

export default DetallesSitio;