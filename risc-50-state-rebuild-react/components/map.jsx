import { Renderer } from "leaflet";
import React from "react";
import { MapContainer, TileLayer, useMap } from 'react-leaflet';

//this will be the leaflet map - which will need state i believe?
//has to be functional component - meaning the state will have to be lifted from here
//also need to set an explicit size for leaflet container in the css, otherwise breaks

function MapSection(props) {
    return (
        <MapContainer center={[37.0902, -95.7129]} zoom={4}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
        </MapContainer>
    )
}

export { MapSection }