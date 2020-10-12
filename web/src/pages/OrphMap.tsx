import React from 'react';

import mapMarkerImg from '../assets/map-marker.svg';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

import '../styles/orphanages.css';

import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


export default function OrphMap() {
  return (
      <div id="page-map">
        <aside>
          <header>
            <img src={mapMarkerImg} alt="Happy "/>

            <h2>Escolha um orfanato no mapa!</h2>
            <p>Muitas crianças estão esperando a sua visita :)</p>
          </header>

          <footer>
            <strong>Goiânia</strong>
            <span>Goiás</span>
          </footer>
        </aside>

      <Map
        center={[-16.356509,-49.4974625]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
       <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {/* <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAP}`} /> */}
      </Map>

      <Link to="" className="create-orph" >
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  )
};
