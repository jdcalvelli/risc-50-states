import React, { useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';

import { StateInfo } from "./StateInfo";

import { loadData } from "../tasks/loadData";

//this will be the leaflet map - which will need state i believe?
//has to be functional component - meaning the state will have to be lifted from here
// css moved to in the container declaration, out of css file

function MapSection(props) {

    //basic styling of each geojson object drawn
    //place in GeoJSON component using style prop
    // const geoMapStyle = {
    //     fillColor: 'yellow',
    //     weight: 1,
    //     color: 'black',
    // }

    const onEachState = (state, layer) => {
        //called when each geojson object is drawn, can be used to set options like color!
        layer.bindPopup(`test`)
    }

    return (
        <div className="mapSection">

            {/* actual drawing of leaflet map */}
            <MapContainer style={{ height: 600, width: 900 }} center={[37.0902, -95.7129]} zoom={4}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* fix this part after adding the new data script */}
                <GeoJSON 
                    data={loadData()}  
                    onEachFeature={onEachState}
                />
            </MapContainer>

            {/* implementation of state info section */}
            <StateInfo/>
        </div>
    )
}

export { MapSection }