import React from "react";
import { MapContainer, TileLayer, useMap } from 'react-leaflet';

import { StateInfo } from "./StateInfo";

//this will be the leaflet map - which will need state i believe?
//has to be functional component - meaning the state will have to be lifted from here
// css moved to in the container declaration, out of css file

function MapSection(props) {
    return (
        <div className="mapSection">

            {/* actual drawing of leaflet map */}
            <MapContainer style={{ height: 600, width: 900 }} center={[37.0902, -95.7129]} zoom={4}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

            </MapContainer>

            {/* implementation of state info section */}
            <StateInfo/>
        </div>
    )
}

export { MapSection }